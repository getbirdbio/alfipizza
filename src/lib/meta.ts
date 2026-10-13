export const META_EVENT_NAMES = [
  'PageView',
  'ViewContent',
  'Lead',
  'Contact',
] as const

export type MetaEventName = (typeof META_EVENT_NAMES)[number]

export const META_EVENT_ALLOWLIST = new Set<string>(META_EVENT_NAMES)

export type MetaUserData = {
  client_user_agent?: string
  fbp?: string
  fbc?: string
}

export type MetaCapiEvent = {
  event_name: MetaEventName
  event_id: string
  event_time: number
  event_source_url?: string
  action_source: 'website'
  user_data?: MetaUserData
}

export function isMetaEventName(value: unknown): value is MetaEventName {
  return typeof value === 'string' && META_EVENT_ALLOWLIST.has(value)
}

export function createMetaEventId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 12)}`
}

export function isMenuPath(pathname: string): boolean {
  return pathname === '/' || pathname === '/menu' || pathname.startsWith('/menu/')
}

export const MENU_SECTION_IDS = [
  'garlic',
  'classics',
  'the-classics',
  'alfi-favs',
] as const
