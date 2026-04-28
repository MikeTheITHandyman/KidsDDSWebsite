import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { EMAIL_CONFIG } from '@/lib/emailConfig'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const {
    parentName, email, phone,
    childName, childAge,
    reason, preferredDentist,
    preferredDay, preferredTime,
    notes,
  } = await req.json()

  if (!parentName || !email || !phone || !childName || !reason) {
    return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
  }

  const dentistLabel = preferredDentist
    ? preferredDentist
        .split('-')
        .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
    : 'No Preference'

  try {
    await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.to,
      replyTo: email,
      subject: `Appointment Request — ${childName} (age ${childAge}) — Kids Dentist`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #3d3d3d;">
          <div style="background: linear-gradient(135deg, #E8934F, #E97D63); padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 20px;">New Appointment Request</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 14px;">Kids Dentist Grayslake — kidsdds.com</p>
          </div>
          <div style="background: #fff; border: 1px solid #e5e7eb; border-top: none; padding: 32px; border-radius: 0 0 12px 12px;">

            <p style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #9ca3af; margin: 0 0 12px;">Parent / Guardian</p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 6px 0; font-size: 13px; color: #9ca3af; width: 140px; vertical-align: top;">Name</td>
                <td style="padding: 6px 0; font-size: 15px; font-weight: 600;">${parentName}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-size: 13px; color: #9ca3af; vertical-align: top;">Email</td>
                <td style="padding: 6px 0; font-size: 15px;"><a href="mailto:${email}" style="color: #4A90A4;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-size: 13px; color: #9ca3af; vertical-align: top;">Phone</td>
                <td style="padding: 6px 0; font-size: 15px; font-weight: 600;">${phone}</td>
              </tr>
            </table>

            <hr style="border: none; border-top: 1px solid #f3f4f6; margin: 0 0 24px;" />

            <p style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #9ca3af; margin: 0 0 12px;">Child</p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 6px 0; font-size: 13px; color: #9ca3af; width: 140px;">Name</td>
                <td style="padding: 6px 0; font-size: 15px; font-weight: 600;">${childName}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-size: 13px; color: #9ca3af;">Age</td>
                <td style="padding: 6px 0; font-size: 15px;">${childAge}</td>
              </tr>
            </table>

            <hr style="border: none; border-top: 1px solid #f3f4f6; margin: 0 0 24px;" />

            <p style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #9ca3af; margin: 0 0 12px;">Visit Details</p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 6px 0; font-size: 13px; color: #9ca3af; width: 140px;">Reason</td>
                <td style="padding: 6px 0; font-size: 15px; font-weight: 600;">${reason}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-size: 13px; color: #9ca3af;">Preferred Dentist</td>
                <td style="padding: 6px 0; font-size: 15px;">${dentistLabel}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-size: 13px; color: #9ca3af;">Preferred Day</td>
                <td style="padding: 6px 0; font-size: 15px;">${preferredDay || 'No Preference'}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-size: 13px; color: #9ca3af;">Preferred Time</td>
                <td style="padding: 6px 0; font-size: 15px;">${preferredTime || 'No Preference'}</td>
              </tr>
            </table>

            ${notes ? `
            <hr style="border: none; border-top: 1px solid #f3f4f6; margin: 0 0 24px;" />
            <p style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #9ca3af; margin: 0 0 8px;">Additional Notes</p>
            <p style="font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${notes}</p>
            ` : ''}

            <hr style="border: none; border-top: 1px solid #f3f4f6; margin: 24px 0 16px;" />
            <p style="font-size: 12px; color: #d1d5db; margin: 0;">
              Reply to this email to respond directly to ${parentName}.
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[appointment/route] Resend error:', err)
    return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 })
  }
}
