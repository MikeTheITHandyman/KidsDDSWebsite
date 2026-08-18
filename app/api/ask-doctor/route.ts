import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import React from 'react'
import { EMAIL_CONFIG } from '@/lib/emailConfig'
import { getLocaleFromRequest } from '@/lib/getLocaleFromRequest'
import InternalOfficeAlert from '@/emails/InternalOfficeAlert'
import ParentAutoResponder, { getParentAutoResponderSubject } from '@/emails/ParentAutoResponder'

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
  const locale = getLocaleFromRequest(req)

  const [officeResult, parentResult] = await Promise.allSettled([
    resend.emails.send({
      from: EMAIL_CONFIG.noreplyFrom,
      to: EMAIL_CONFIG.to,
      replyTo: email,
      subject: `[Ask the Doctor] New Question from ${parentName}`,
      react: React.createElement(InternalOfficeAlert, {
        heading: 'Ask the Doctor — New Question',
        name: parentName,
        email,
        phone,
        message: question,
        messageLabel: 'Question',
        extraFields: [
          { label: "Child's Name", value: childName },
          { label: "Child's Age", value: childAge || 'Not provided' },
          { label: 'Date of Birth', value: childDob || 'Not provided' },
          { label: 'Preferred Dentist', value: dentistLabel },
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
    console.error('[ask-doctor/route] Office alert email failed:', officeResult.reason)
    return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 })
  }
  if (parentResult.status === 'rejected') {
    // The office was notified successfully, so the lead isn't lost — don't
    // fail the request, just log it so someone can follow up manually.
    console.error('[ask-doctor/route] Parent auto-responder email failed:', parentResult.reason)
  }

  return NextResponse.json({ ok: true })
}
