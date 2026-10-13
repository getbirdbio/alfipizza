import { NextRequest, NextResponse } from 'next/server'
import { META_PIXEL_ID } from '@/lib/site'
import { isMetaEventName } from '@/lib/meta'

const GRAPH_URL = `https://graph.facebook.com/v21.0/${META_PIXEL_ID}/events`

function clientIp(request: NextRequest): string | undefined {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim()
    if (first) return first
  }

  const realIp = request.headers.get('x-real-ip')?.trim()
  if (realIp) return realIp

  const vercelForwarded = request.headers.get('x-vercel-forwarded-for')
  if (vercelForwarded) {
    const first = vercelForwarded.split(',')[0]?.trim()
    if (first) return first
  }

  return undefined
}

function asOptionalString(value: unknown): string | undefined {
  return typeof value === 'string' && value.length > 0 ? value : undefined
}

export async function POST(request: NextRequest) {
  const token = process.env.META_CAPI_TOKEN
  if (!token) {
    return new NextResponse(null, { status: 204 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 })
  }

  const payload = body as Record<string, unknown>
  if (!isMetaEventName(payload.event_name)) {
    return NextResponse.json({ error: 'invalid_event_name' }, { status: 400 })
  }

  const eventId = asOptionalString(payload.event_id)
  if (!eventId) {
    return NextResponse.json({ error: 'invalid_event_id' }, { status: 400 })
  }

  const eventTime =
    typeof payload.event_time === 'number' && Number.isFinite(payload.event_time)
      ? Math.floor(payload.event_time)
      : Math.floor(Date.now() / 1000)

  const rawUserData =
    payload.user_data && typeof payload.user_data === 'object'
      ? (payload.user_data as Record<string, unknown>)
      : {}

  const userData: Record<string, string> = {}
  const userAgent = asOptionalString(rawUserData.client_user_agent)
  const fbp = asOptionalString(rawUserData.fbp)
  const fbc = asOptionalString(rawUserData.fbc)
  const ip = clientIp(request)

  if (userAgent) userData.client_user_agent = userAgent
  if (fbp) userData.fbp = fbp
  if (fbc) userData.fbc = fbc
  if (ip) userData.client_ip_address = ip

  try {
    const upstream = await fetch(GRAPH_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: [
          {
            event_name: payload.event_name,
            event_id: eventId,
            event_time: eventTime,
            event_source_url: asOptionalString(payload.event_source_url),
            action_source: 'website',
            user_data: userData,
          },
        ],
        access_token: token,
      }),
    })

    if (!upstream.ok) {
      return NextResponse.json({ error: 'upstream_error' }, { status: 502 })
    }

    return new NextResponse(null, { status: 204 })
  } catch {
    return NextResponse.json({ error: 'upstream_error' }, { status: 502 })
  }
}
