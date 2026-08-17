declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Fires a GA4 event via the global `gtag` injected by `<GoogleAnalytics>`
 * (see app/layout.tsx). No-ops if analytics hasn't loaded/is blocked —
 * callers never need to guard this themselves.
 */
export function sendGAEvent(eventName: string, params?: Record<string, any>): void {
  try {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
    window.gtag('event', eventName, params)
  } catch {
    // Analytics must never break the UI.
  }
}
