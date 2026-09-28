import { Redis } from '@upstash/redis';
import { NextRequest, NextResponse } from 'next/server';

const TTL_SECONDS = 30 * 24 * 60 * 60; // 30 days
const MAX_PAYLOAD_BYTES = 512 * 1024;   // 512 KB hard limit

function getRedis(): Redis {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    throw new Error('UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN must be set');
  }
  return new Redis({ url, token });
}

function generateCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no I/O/0/1 to avoid confusion
  let code = '';
  for (let i = 0; i < 8; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

// POST /api/sync — save data, get a sync code back
export async function POST(req: NextRequest) {
  const body = await req.text();

  if (Buffer.byteLength(body, 'utf8') > MAX_PAYLOAD_BYTES) {
    return NextResponse.json({ error: 'Payload too large' }, { status: 413 });
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  let redis: Redis;
  try {
    redis = getRedis();
  } catch {
    return NextResponse.json({ error: 'Cloud sync not configured' }, { status: 503 });
  }

  try {
    // Try up to 3 times to find a unique code (collision is very unlikely)
    let code = '';
    for (let i = 0; i < 3; i++) {
      const candidate = generateCode();
      const exists = await redis.exists(`sync:${candidate}`);
      if (!exists) { code = candidate; break; }
    }
    if (!code) {
      return NextResponse.json({ error: 'Try again' }, { status: 503 });
    }

    await redis.set(`sync:${code}`, parsed, { ex: TTL_SECONDS });

    return NextResponse.json({ code, expiresInDays: 30 });
  } catch {
    return NextResponse.json({ error: 'Cloud sync failed' }, { status: 503 });
  }
}

// GET /api/sync?code=XXXX — load data by code, reset TTL
export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code')?.toUpperCase().trim();

  if (!code || !/^[A-Z0-9]{8}$/.test(code)) {
    return NextResponse.json({ error: 'Invalid code' }, { status: 400 });
  }

  let redis: Redis;
  try {
    redis = getRedis();
  } catch {
    return NextResponse.json({ error: 'Cloud sync not configured' }, { status: 503 });
  }

  try {
    const data = await redis.get(`sync:${code}`);
    if (!data) {
      return NextResponse.json({ error: 'Code not found or expired' }, { status: 404 });
    }

    // Reset TTL on every successful load so active users never lose data
    await redis.expire(`sync:${code}`, TTL_SECONDS);

    return NextResponse.json({ data });
  } catch {
    return NextResponse.json({ error: 'Cloud sync failed' }, { status: 503 });
  }
}
