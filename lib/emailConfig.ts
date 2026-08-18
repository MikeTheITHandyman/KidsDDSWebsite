// ─────────────────────────────────────────────────────────────────────────────
// Email routing configuration — edit this file or set environment variables
// ─────────────────────────────────────────────────────────────────────────────
//
// To change recipients, set CONTACT_EMAIL_TO in your .env.local file.
// Multiple addresses are supported — separate with commas:
//   CONTACT_EMAIL_TO="info@kidsdds.com, manager@kidsdds.com"
//
// The "from" address must belong to a domain verified in your Resend account.
// Until kidsdds.com is verified, leave CONTACT_EMAIL_FROM unset and Resend
// will use its shared test sender (only delivers to your Resend account email).
// ─────────────────────────────────────────────────────────────────────────────

export const EMAIL_CONFIG = {
  /** Recipient list — comma-separated addresses in CONTACT_EMAIL_TO env var */
  to: (process.env.CONTACT_EMAIL_TO ?? 'info@kidsdds.com')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean),

  /** Sender address — must be a Resend-verified domain in production */
  from: process.env.CONTACT_EMAIL_FROM ?? 'Kids Dentist Website <onboarding@resend.dev>',

  /**
   * Fixed sender for the dual-email system (office alert + parent
   * auto-responder) — both legs always send from noreply@kidsdds.com,
   * independent of CONTACT_EMAIL_FROM. Requires kidsdds.com to be a
   * Resend-verified sending domain.
   */
  noreplyFrom: 'Kids Dentist <noreply@kidsdds.com>',
}
