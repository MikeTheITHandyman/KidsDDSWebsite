import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import React from 'react'
import { EMAIL_CONFIG } from '@/lib/emailConfig'
import { getLocaleFromRequest } from '@/lib/getLocaleFromRequest'
import InternalOfficeAlert from '@/emails/InternalOfficeAlert'
import ParentAutoResponder, { getParentAutoResponderSubject } from '@/emails/ParentAutoResponder'

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

  const locale = getLocaleFromRequest(req)

  const [officeResult, parentResult] = await Promise.allSettled([
    resend.emails.send({
      from: EMAIL_CONFIG.noreplyFrom,
      to: EMAIL_CONFIG.to,
      replyTo: email,
      subject: `Appointment Request — ${childName} (age ${childAge}) — Kids Dentist`,
      react: React.createElement(InternalOfficeAlert, {
        heading: 'New Appointment Request',
        name: parentName,
        email,
        phone,
        serviceRequested: reason,
        message: notes,
        messageLabel: 'Additional Notes',
        extraFields: [
          { label: "Child's Name", value: childName },
          { label: "Child's Age", value: String(childAge) },
          { label: 'Preferred Dentist', value: dentistLabel },
          { label: 'Preferred Day', value: preferredDay || 'No Preference' },
          { label: 'Preferred Time', value: preferredTime || 'No Preference' },
        ],
      }),
    }),
    resend.emails.send({
      from: EMAIL_CONFIG.noreplyFrom,
      to: email,
      subject: getParentAutoResponderSubject(locale),
      react: React.createElement(ParentAutoResponder, {
        locale,
        parentName: parentName.split(' ')[0],
      }),
    }),
  ])

  if (officeResult.status === 'rejected') {
    console.error('[appointment/route] Office alert email failed:', officeResult.reason)
    return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 })
  }
  if (parentResult.status === 'rejected') {
    // The office was notified successfully, so the lead isn't lost — don't
    // fail the request, just log it so someone can follow up manually.
    console.error('[appointment/route] Parent auto-responder email failed:', parentResult.reason)
  }

  return NextResponse.json({ ok: true })
}
