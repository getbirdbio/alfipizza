import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Host-gated fallback so apex never serves the site. Only `alfipizza.co.za`
// matches, so www / preview / localhost cannot loop. Prefer the same redirect
// in Vercel → Project → Settings → Domains.
export function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0] ?? ''
  if (host !== 'alfipizza.co.za') {
    return NextResponse.next()
  }

  const destination = new URL(request.url)
  destination.protocol = 'https:'
  destination.hostname = 'www.alfipizza.co.za'
  destination.port = ''
  return NextResponse.redirect(destination, 308)
}
