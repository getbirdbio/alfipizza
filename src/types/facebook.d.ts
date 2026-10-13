interface FbqFn {
  (...args: unknown[]): void
  callMethod?: (...args: unknown[]) => void
  queue: unknown[]
  loaded: boolean
  version: string
  push: (...args: unknown[]) => void
}

interface Window {
  fbq?: FbqFn
  _fbq?: FbqFn
}
