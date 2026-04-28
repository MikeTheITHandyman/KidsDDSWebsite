import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { EMAIL_CONFIG } from '@/lib/emailConfig'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { name, email, phone, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.to,
      replyTo: email,
      subject: `New Contact Message from ${name} — Kids Dentist Website`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #3d3d3d;">
          <div style="background: linear-gradient(135deg, #4A90A4, #6BA899); padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 20px;">New Contact Message</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 14px;">Kids Dentist Grayslake — kidsdds.com</p>
          </div>
          <div style="background: #fff; border: 1px solid #e5e7eb; border-top: none; padding: 32px; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #9ca3af; width: 110px; vertical-align: top;">Name</td>
                <td style="padding: 8px 0; font-size: 15px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #9ca3af; vertical-align: top;">Email</td>
                <td style="padding: 8px 0; font-size: 15px;"><a href="mailto:${email}" style="color: #4A90A4;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #9ca3af; vertical-align: top;">Phone</td>
                <td style="padding: 8px 0; font-size: 15px;">${phone || '<em style="color:#9ca3af">Not provided</em>'}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #f3f4f6; margin: 20px 0;" />
            <p style="font-size: 13px; color: #9ca3af; margin: 0 0 8px;">Message</p>
            <p style="font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
            <hr style="border: none; border-top: 1px solid #f3f4f6; margin: 24px 0 16px;" />
            <p style="font-size: 12px; color: #d1d5db; margin: 0;">
              Reply to this email to respond directly to ${name}.
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact/route] Resend error:', err)
    return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 })
  }
}
