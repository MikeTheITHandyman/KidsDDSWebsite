import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'

export interface InternalOfficeAlertField {
  label: string
  value: string
}

export interface InternalOfficeAlertProps {
  /** e.g. "New Appointment Request", "New Contact Message", "Ask the Doctor — New Question" */
  heading: string
  name: string
  email: string
  phone?: string
  /** e.g. reason for visit, referral reason, or "General Inquiry" */
  serviceRequested?: string
  /** Free-text body — notes, question, or message */
  message?: string
  messageLabel?: string
  /** Form-specific extras (child name/age, preferred day, etc.), rendered as their own block */
  extraFields?: InternalOfficeAlertField[]
}

const BRAND_PURPLE = '#6B4BC8'

export default function InternalOfficeAlert({
  heading,
  name,
  email,
  phone,
  serviceRequested,
  message,
  messageLabel = 'Message',
  extraFields = [],
}: InternalOfficeAlertProps) {
  return (
    <Html>
      <Head />
      <Preview>
        {heading}: {name}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={headerBar}>
            <Heading style={headerTitle}>{heading}</Heading>
            <Text style={headerSub}>Kids Dentist Grayslake · kidsdds.com</Text>
          </Section>

          <Section style={body}>
            <Text style={sectionLabel}>Contact Info</Text>
            <Field label="Name" value={name} bold />
            <Field label="Email" value={email} href={`mailto:${email}`} />
            {phone && <Field label="Phone" value={phone} href={`tel:${phone.replace(/[^\d+]/g, '')}`} />}

            {serviceRequested && (
              <>
                <Hr style={hr} />
                <Text style={sectionLabel}>Service Requested</Text>
                <Text style={fieldValueBold}>{serviceRequested}</Text>
              </>
            )}

            {extraFields.length > 0 && (
              <>
                <Hr style={hr} />
                <Text style={sectionLabel}>Details</Text>
                {extraFields.map((f) => (
                  <Field key={f.label} label={f.label} value={f.value} />
                ))}
              </>
            )}

            {message && (
              <>
                <Hr style={hr} />
                <Text style={sectionLabel}>{messageLabel}</Text>
                <Text style={messageText}>{message}</Text>
              </>
            )}

            <Hr style={hrFooter} />
            <Text style={footerNote}>Reply to this email to respond directly to {name}.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

function Field({
  label,
  value,
  href,
  bold,
}: {
  label: string
  value: string
  href?: string
  bold?: boolean
}) {
  return (
    <Section style={{ marginBottom: '12px' }}>
      <Text style={fieldLabel}>{label}</Text>
      <Text style={bold ? fieldValueBold : fieldValue}>
        {href ? (
          <Link href={href} style={fieldLink}>
            {value}
          </Link>
        ) : (
          value
        )}
      </Text>
    </Section>
  )
}

// ─── Styles ─────────────────────────────────────────────────────────────────

const main = {
  backgroundColor: '#f4f4f5',
  fontFamily: "'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  padding: '24px 0',
}

const container = {
  maxWidth: '600px',
  margin: '0 auto',
}

const headerBar = {
  background: `linear-gradient(135deg, ${BRAND_PURPLE}, #8B6BD8)`,
  padding: '24px 32px',
  borderRadius: '12px 12px 0 0',
}

const headerTitle = {
  color: '#fff',
  margin: '0',
  fontSize: '20px',
  fontWeight: 800,
}

const headerSub = {
  color: 'rgba(255,255,255,0.85)',
  margin: '6px 0 0',
  fontSize: '14px',
}

const body = {
  backgroundColor: '#fff',
  border: '1px solid #e5e7eb',
  borderTop: 'none',
  padding: '32px',
  borderRadius: '0 0 12px 12px',
}

const sectionLabel = {
  fontSize: '12px',
  fontWeight: 700,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.06em',
  color: '#9ca3af',
  margin: '0 0 16px',
}

const fieldLabel = {
  fontSize: '12px',
  color: '#9ca3af',
  margin: '0 0 3px',
}

const fieldValue = {
  fontSize: '15px',
  margin: '0',
  color: '#3d3d3d',
}

const fieldValueBold = {
  fontSize: '15px',
  fontWeight: 700,
  margin: '0',
  color: '#3d3d3d',
}

const fieldLink = {
  color: BRAND_PURPLE,
  textDecoration: 'none',
}

const messageText = {
  fontSize: '15px',
  lineHeight: '1.7',
  margin: '0',
  color: '#3d3d3d',
  whiteSpace: 'pre-wrap' as const,
}

const hr = {
  border: 'none',
  borderTop: '1px solid #f3f4f6',
  margin: '8px 0 24px',
}

const hrFooter = {
  border: 'none',
  borderTop: '1px solid #f3f4f6',
  margin: '24px 0 16px',
}

const footerNote = {
  fontSize: '12px',
  color: '#d1d5db',
  margin: '0',
}
