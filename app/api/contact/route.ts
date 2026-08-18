import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import React from 'react'
import { EMAIL_CONFIG } from '@/lib/emailConfig'
import { getLocaleFromRequest } from '@/lib/getLocaleFromRequest'
import InternalOfficeAlert from '@/emails/InternalOfficeAlert'
import ParentAutoResponder, { getParentAutoResponderSubject } from '@/emails/ParentAutoResponder'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { name, email, phone, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
  }

  const locale = getLocaleFromRequest(req)

  const [officeResult, parentResult] = await Promise.allSettled([
    resend.emails.send({
      from: EMAIL_CONFIG.noreplyFrom,
      to: EMAIL_CONFIG.to,
      replyTo: email,
      subject: `New Contact Message from ${name} — Kids Dentist Website`,
      react: React.createElement(InternalOfficeAlert, {
        heading: 'New Contact Message',
        name,
        email,
        phone,
        message,
      }),
    }),
    resend.emails.send({
      from: EMAIL_CONFIG.noreplyFrom,
      to: email,
      subject: getParentAutoResponderSubject(locale),
      react: React.createElement(ParentAutoResponder, {
        locale,
        parentName: name.split(' ')[0],
      }),
    }),
  ])

  if (officeResult.status === 'rejected') {
    console.error('[contact/route] Office alert email failed:', officeResult.reason)
    return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 })
  }
  if (parentResult.status === 'rejected') {
    // The office was notified successfully, so the lead isn't lost — don't
    // fail the request, just log it so someone can follow up manually.
    console.error('[contact/route] Parent auto-responder email failed:', parentResult.reason)
  }

  return NextResponse.json({ ok: true })
}
