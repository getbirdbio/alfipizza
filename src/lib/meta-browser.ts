import {
  createMetaEventId,
  type MetaCapiEvent,
  type MetaEventName,
} from '@/lib/meta'

const CAPI_ENDPOINT = '/api/meta-capi'

function readCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined
  const escaped = name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')
  const match = document.cookie.match(new RegExp(`(?:^|; )${escaped}=([^;]*)`))
  return match ? decodeURIComponent(match[1]) : undefined
}

function fbcFromUrl(): string | undefined {
  if (typeof window === 'undefined') return undefined
  const fbclid = new URLSearchParams(window.location.search).get('fbclid')
  if (!fbclid) return undefined
  return `fb.1.${Date.now()}.${fbclid}`
}

function browserUserData() {
  return {
    client_user_agent:
      typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
    fbp: readCookie('_fbp'),
    fbc: readCookie('_fbc') ?? fbcFromUrl(),
  }
}

function sendCapi(payload: MetaCapiEvent) {
  const body = JSON.stringify(payload)
  if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
    const queued = navigator.sendBeacon(
      CAPI_ENDPOINT,
      new Blob([body], { type: 'application/json' })
    )
    if (queued) return
  }

  void fetch(CAPI_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    keepalive: true,
  }).catch(() => {
    // Navigation may cancel the request; beacon/keepalive already tried.
  })
}

function trackPixel(eventName: MetaEventName, eventId: string) {
  const fire = () => {
    if (typeof window === 'undefined' || typeof window.fbq !== 'function') {
      return false
    }
    window.fbq('track', eventName, {}, { eventID: eventId })
    return true
  }

  if (fire()) return

  const started = Date.now()
  const timer = window.setInterval(() => {
    if (fire() || Date.now() - started > 8000) {
      window.clearInterval(timer)
    }
  }, 50)
}

export function trackMetaEvent(eventName: MetaEventName) {
  const event_id = createMetaEventId()
  const event_source_url =
    typeof window !== 'undefined' ? window.location.href : undefined

  trackPixel(eventName, event_id)
  sendCapi({
    event_name: eventName,
    event_id,
    event_time: Math.floor(Date.now() / 1000),
    event_source_url,
    action_source: 'website',
    user_data: browserUserData(),
  })
}

export function isNowishOrderHref(href: string): boolean {
  try {
    const url = new URL(href, typeof window !== 'undefined' ? window.location.href : undefined)
    return (
      url.hostname === 'order.nowish.co.za' ||
      url.hostname.endsWith('.order.nowish.co.za')
    )
  } catch {
    return false
  }
}

export function isContactHref(href: string): boolean {
  const trimmed = href.trim()
  if (trimmed.toLowerCase().startsWith('tel:')) return true

  try {
    const url = new URL(
      trimmed,
      typeof window !== 'undefined' ? window.location.href : undefined
    )
    const host = url.hostname.replace(/^www\./, '').toLowerCase()
    return (
      host === 'wa.me' ||
      host === 'api.whatsapp.com' ||
      host === 'whatsapp.com' ||
      host.endsWith('.whatsapp.com')
    )
  } catch {
    const lower = trimmed.toLowerCase()
    return lower.includes('wa.me/') || lower.includes('whatsapp.com')
  }
}
