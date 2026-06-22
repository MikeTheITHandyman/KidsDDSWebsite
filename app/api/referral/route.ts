import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { EMAIL_CONFIG } from '@/lib/emailConfig'

function esc(s: unknown): string {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function row(label: string, value: string) {
  return `<div style="margin-bottom:14px"><p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#9ca3af;margin:0 0 4px">${label}</p><p style="font-size:15px;font-weight:600;margin:0;line-height:1.5">${value}</p></div>`
}

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  const {
    providerName,
    contactEmail,
    contactPhone,
    guardianName,
    patientDob,
    reason,
    clinicalNotes,
  } = await req.json()

  if (!providerName || !contactEmail || !guardianName || !patientDob || !reason) {
    return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.to,
      replyTo: contactEmail,
      subject: `[Priority Partner Referral] from ${providerName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#3d3d3d">
          <div style="background:linear-gradient(135deg,#78509b,#4A90A4);padding:24px 32px;border-radius:12px 12px 0 0">
            <p style="color:rgba(255,255,255,0.7);font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 6px">Priority Referral · Kids Dentist Grayslake</p>
            <h1 style="color:#fff;margin:0;font-size:22px;font-weight:800">New Partner Referral</h1>
            <p style="color:rgba(255,255,255,0.82);margin:6px 0 0;font-size:14px">Submitted via kidsdds.com · respond by replying to this email</p>
          </div>
          <div style="background:#fff;border:1px solid #e5e7eb;border-top:none;padding:32px;border-radius:0 0 12px 12px">

            <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#78509b;margin:0 0 16px;padding-bottom:8px;border-bottom:1px solid #f3f4f6">Referring Provider</p>
            ${row('Practice / Provider Name', esc(providerName))}
            ${row('Contact Email', `<a href="mailto:${esc(contactEmail)}" style="color:#4A90A4;text-decoration:none">${esc(contactEmail)}</a>`)}
            ${row('Contact Phone', esc(contactPhone) || '<em style="color:#9ca3af;font-weight:400">Not provided</em>')}

            <hr style="border:none;border-top:1px solid #f3f4f6;margin:20px 0">

            <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#4A90A4;margin:0 0 16px;padding-bottom:8px;border-bottom:1px solid #f3f4f6">Patient Information</p>
            ${row('Guardian Name', esc(guardianName))}
            ${row('Patient Date of Birth', esc(patientDob))}

            <hr style="border:none;border-top:1px solid #f3f4f6;margin:20px 0">

            <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#6BA899;margin:0 0 16px;padding-bottom:8px;border-bottom:1px solid #f3f4f6">Referral Details</p>
            ${row('Reason for Referral', `<span style="background:rgba(107,168,153,0.12);color:#4A90A4;padding:3px 10px;border-radius:100px;font-size:13px">${esc(reason)}</span>`)}

            ${clinicalNotes ? `
            <hr style="border:none;border-top:1px solid #f3f4f6;margin:20px 0">
            <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#9ca3af;margin:0 0 10px">Supporting Clinical Notes</p>
            <div style="background:#fafaf8;border:1px solid #e5e7eb;border-radius:8px;padding:16px">
              <p style="font-size:15px;line-height:1.75;margin:0;white-space:pre-wrap">${esc(clinicalNotes)}</p>
            </div>
            ` : ''}

            <hr style="border:none;border-top:1px solid #f3f4f6;margin:24px 0 16px">
            <p style="font-size:12px;color:#d1d5db;margin:0">
              Reply directly to this email to reach ${esc(providerName)} at ${esc(contactEmail)}.
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[referral/route] Resend error:', err)
    return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 })
  }
}
