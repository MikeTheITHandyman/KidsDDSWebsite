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

            <p style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #9ca3af; margin: 0 0 16px;">Parent / Guardian</p>
            <div style="margin-bottom: 12px;"><p style="font-size: 12px; color: #9ca3af; margin: 0 0 3px;">Name</p><p style="font-size: 15px; font-weight: 600; margin: 0;">${parentName}</p></div>
            <div style="margin-bottom: 12px;"><p style="font-size: 12px; color: #9ca3af; margin: 0 0 3px;">Email</p><p style="font-size: 15px; margin: 0;"><a href="mailto:${email}" style="color: #4A90A4;">${email}</a></p></div>
            <div style="margin-bottom: 24px;"><p style="font-size: 12px; color: #9ca3af; margin: 0 0 3px;">Phone</p><p style="font-size: 15px; font-weight: 600; margin: 0;">${phone}</p></div>

            <hr style="border: none; border-top: 1px solid #f3f4f6; margin: 0 0 24px;" />

            <p style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #9ca3af; margin: 0 0 16px;">Child</p>
            <div style="margin-bottom: 12px;"><p style="font-size: 12px; color: #9ca3af; margin: 0 0 3px;">Name</p><p style="font-size: 15px; font-weight: 600; margin: 0;">${childName}</p></div>
            <div style="margin-bottom: 24px;"><p style="font-size: 12px; color: #9ca3af; margin: 0 0 3px;">Age</p><p style="font-size: 15px; margin: 0;">${childAge}</p></div>

            <hr style="border: none; border-top: 1px solid #f3f4f6; margin: 0 0 24px;" />

            <p style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #9ca3af; margin: 0 0 16px;">Visit Details</p>
            <div style="margin-bottom: 12px;"><p style="font-size: 12px; color: #9ca3af; margin: 0 0 3px;">Reason</p><p style="font-size: 15px; font-weight: 600; margin: 0;">${reason}</p></div>
            <div style="margin-bottom: 12px;"><p style="font-size: 12px; color: #9ca3af; margin: 0 0 3px;">Preferred Dentist</p><p style="font-size: 15px; margin: 0;">${dentistLabel}</p></div>
            <div style="margin-bottom: 12px;"><p style="font-size: 12px; color: #9ca3af; margin: 0 0 3px;">Preferred Day</p><p style="font-size: 15px; margin: 0;">${preferredDay || 'No Preference'}</p></div>
            <div style="margin-bottom: 24px;"><p style="font-size: 12px; color: #9ca3af; margin: 0 0 3px;">Preferred Time</p><p style="font-size: 15px; margin: 0;">${preferredTime || 'No Preference'}</p></div>

            ${notes ? `
            <hr style="border: none; border-top: 1px solid #f3f4f6; margin: 0 0 24px;" />
            <p style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #9ca3af; margin: 0 0 8px;">Additional Notes</p>
            <p style="font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${notes}</p>
            ` : ''}

            <hr style="border: none; border-top: 1px solid #f3f4f6; margin: 24px 0 16px;" />
            <p style="font-size: 12px; color: #d1d5db; margin: 0;">Reply to this email to respond directly to ${parentName}.</p>
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
