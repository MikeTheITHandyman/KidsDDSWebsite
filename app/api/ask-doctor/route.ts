import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { EMAIL_CONFIG } from '@/lib/emailConfig'

const DENTIST_LABELS: Record<string, string> = {
  'no-preference': 'No Preference',
  'dr-gutierrez': 'Dr. Gutierrez',
  'dr-rutcosky': 'Dr. Rutcosky',
  'dr-alrayyes': 'Dr. Alrayyes',
  'dr-compton': 'Dr. Compton',
}

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  const {
    parentName,
    email,
    phone,
    childName,
    childAge,
    childDob,
    preferredDentist,
    question,
  } = await req.json()

  if (!parentName || !email || !childName || !question) {
    return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
  }

  const dentistLabel = DENTIST_LABELS[preferredDentist] ?? 'No Preference'

  try {
    await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.to,
      replyTo: email,
      subject: `[Ask the Doctor] New Question from ${parentName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #3d3d3d;">
          <div style="background: linear-gradient(135deg, #78509b, #4A90A4); padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 20px;">Ask the Doctor — New Question</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 14px;">Kids Dentist Grayslake — kidsdds.com</p>
          </div>
          <div style="background: #fff; border: 1px solid #e5e7eb; border-top: none; padding: 32px; border-radius: 0 0 12px 12px;">

            <p style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #9ca3af; margin: 0 0 16px;">Parent / Guardian</p>
            <div style="margin-bottom: 12px;"><p style="font-size: 12px; color: #9ca3af; margin: 0 0 3px;">Name</p><p style="font-size: 15px; font-weight: 600; margin: 0;">${parentName}</p></div>
            <div style="margin-bottom: 12px;"><p style="font-size: 12px; color: #9ca3af; margin: 0 0 3px;">Email</p><p style="font-size: 15px; margin: 0;"><a href="mailto:${email}" style="color: #4A90A4;">${email}</a></p></div>
            <div style="margin-bottom: 24px;"><p style="font-size: 12px; color: #9ca3af; margin: 0 0 3px;">Phone</p><p style="font-size: 15px; margin: 0;">${phone || '<em style="color:#9ca3af">Not provided</em>'}</p></div>

            <hr style="border: none; border-top: 1px solid #f3f4f6; margin: 0 0 24px;" />

            <p style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #9ca3af; margin: 0 0 16px;">Child</p>
            <div style="margin-bottom: 12px;"><p style="font-size: 12px; color: #9ca3af; margin: 0 0 3px;">Name</p><p style="font-size: 15px; font-weight: 600; margin: 0;">${childName}</p></div>
            <div style="margin-bottom: 12px;"><p style="font-size: 12px; color: #9ca3af; margin: 0 0 3px;">Age</p><p style="font-size: 15px; margin: 0;">${childAge || '<em style="color:#9ca3af">Not provided</em>'}</p></div>
            <div style="margin-bottom: 24px;"><p style="font-size: 12px; color: #9ca3af; margin: 0 0 3px;">Date of Birth</p><p style="font-size: 15px; margin: 0;">${childDob || '<em style="color:#9ca3af">Not provided</em>'}</p></div>

            <hr style="border: none; border-top: 1px solid #f3f4f6; margin: 0 0 24px;" />

            <p style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #9ca3af; margin: 0 0 16px;">Routing</p>
            <div style="margin-bottom: 24px;"><p style="font-size: 12px; color: #9ca3af; margin: 0 0 3px;">Preferred Dentist</p><p style="font-size: 15px; font-weight: 600; margin: 0;">${dentistLabel}</p></div>

            <hr style="border: none; border-top: 1px solid #f3f4f6; margin: 0 0 24px;" />

            <p style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #9ca3af; margin: 0 0 8px;">Question</p>
            <p style="font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${question}</p>

            <hr style="border: none; border-top: 1px solid #f3f4f6; margin: 24px 0 16px;" />
            <p style="font-size: 12px; color: #d1d5db; margin: 0;">Reply to this email to respond directly to ${parentName}.</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[ask-doctor/route] Resend error:', err)
    return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 })
  }
}
