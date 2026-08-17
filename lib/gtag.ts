// Note: `Window.dataLayer` is already declared globally by `@next/third-parties/google`
// (pulled in via the `<GoogleAnalytics>` import in app/[locale]/layout.tsx) — do not
// redeclare it here, a conflicting shape would fail to merge under `declare global`.

/**
 * Fires a GA4 event by pushing straight onto `window.dataLayer` (the queue
 * gtag.js itself drains) instead of calling `window.gtag(...)`. This fires
 * reliably even if gtag.js hasn't finished initializing yet — calling
 * `window.gtag` directly was silently no-op-ing on early/fast interactions
 * (e.g. form submits) because the function isn't defined that early, while
 * `dataLayer` already exists and queues pushes for gtag.js to process once
 * it loads.
 */
export const sendGAEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params,
  });
};
