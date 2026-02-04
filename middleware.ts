
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Middleware is disabled as routing is handled at the root level
  return NextResponse.next();
}

export const config = {
  // Empty matcher ensures the middleware never executes, 
  // avoiding edge runtime instantiation issues.
  matcher: [],
};
