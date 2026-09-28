import { Redis } from '@upstash/redis';
import { NextRequest, NextResponse } from 'next/server';

// Vercel Cron calls this with Authorization: Bearer <CRON_SECRET>
export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = req.headers.get('authorization');
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    return NextResponse.json({ error: 'Redis not configured' }, { status: 503 });
  }

  try {
    const redis = new Redis({ url, token });
    await redis.set('keep-alive', new Date().toISOString(), { ex: 7 * 24 * 60 * 60 });
    return NextResponse.json({ ok: true, ts: new Date().toISOString() });
  } catch (err) {
    return NextResponse.json({ error: 'Redis ping failed' }, { status: 503 });
  }
}
