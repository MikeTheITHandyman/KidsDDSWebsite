import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'

export interface ParentAutoResponderProps {
  locale?: 'en' | 'es'
  /** Parent/guardian first name, used in the greeting when provided */
  parentName?: string
}

const BRAND_PURPLE = '#6B4BC8'
const ACCENT_ORANGE = '#EF6C1A'
const LOGO_URL = 'https://www.kidsdds.com/brand_assets/kids-dentist-logo.png'
const PATIENT_FORMS_URL = 'https://www.kidsdds.com/for-patients/patient-forms'
const PHONE_TEL = '+18472231400'

const COPY = {
  en: {
    preview: "We've received your request, Kids Dentist Grayslake",
    greeting: (name?: string) => (name ? `Hi ${name},` : 'Hi there,'),
    body: 'Thank you for reaching out to Kids Dentist! We have received your request and our team will text or call you shortly at the number provided to follow up.',
    officeHoursHeading: 'Office Hours',
    hours: [
      ['Monday – Thursday', '9:00 AM – 5:00 PM'],
      ['Friday', '8:00 AM – 2:00 PM'],
    ],
    formsPrompt: 'Want to get a head start? Complete your patient forms online before your visit.',
    formsButton: 'Patient Forms',
    signOff: 'We look forward to seeing your family soon!',
    team: 'The Kids Dentist Team',
    footerNote: "If you need to reach us sooner, call or text us directly.",
  },
  es: {
    preview: 'Hemos recibido su solicitud, Kids Dentist Grayslake',
    greeting: (name?: string) => (name ? `Hola ${name},` : 'Hola,'),
    body: '¡Gracias por comunicarse con Kids Dentist! Hemos recibido su solicitud y nuestro equipo le enviará un mensaje de texto o le llamará en breve al número proporcionado para darle seguimiento.',
    officeHoursHeading: 'Horario de Oficina',
    hours: [
      ['Lunes – Jueves', '9:00 AM – 5:00 PM'],
      ['Viernes', '8:00 AM – 2:00 PM'],
    ],
    formsPrompt: '¿Quiere adelantar el proceso? Complete sus formularios de paciente en línea antes de su visita.',
    formsButton: 'Formularios del Paciente',
    signOff: '¡Esperamos ver a su familia pronto!',
    team: 'El Equipo de Kids Dentist',
    footerNote: 'Si necesita comunicarse con nosotros antes, llámenos o envíenos un mensaje de texto directamente.',
  },
} as const

/** Matches the template's own Preview text — keeps the email subject and inbox preview in sync. */
export function getParentAutoResponderSubject(locale: 'en' | 'es' = 'en'): string {
  return COPY[locale].preview
}

export default function ParentAutoResponder({ locale = 'en', parentName }: ParentAutoResponderProps) {
  const t = COPY[locale]

  return (
    <Html lang={locale}>
      <Head />
      <Preview>{t.preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoWrap}>
            <Img src={LOGO_URL} width="160" height="88" alt="Kids Dentist" style={logo} />
          </Section>

          <Section style={card}>
            <Text style={greeting}>{t.greeting(parentName)}</Text>
            <Text style={paragraph}>{t.body}</Text>

            <Hr style={hr} />

            <Text style={sectionHeading}>{t.officeHoursHeading}</Text>
            {t.hours.map(([day, time]) => (
              <Text key={day} style={hoursLine}>
                <span style={hoursDay}>{day}:</span> {time}
              </Text>
            ))}

            <Hr style={hr} />

            <Text style={paragraph}>{t.formsPrompt}</Text>
            <Button href={PATIENT_FORMS_URL} style={ctaButton}>
              {t.formsButton}
            </Button>

            <Hr style={hr} />

            <Text style={paragraph}>
              {t.signOff}
              <br />
              {t.team}
            </Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>{t.footerNote}</Text>
            <Text style={footerText}>
              160 Commerce Dr #100, Grayslake, IL 60030 ·{' '}
              <Link href={`tel:${PHONE_TEL}`} style={footerLink}>
                (847) 223-1400
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// ─── Styles ─────────────────────────────────────────────────────────────────

const main = {
  backgroundColor: '#FDF8F2',
  fontFamily: "'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  padding: '32px 0',
}

const container = {
  maxWidth: '560px',
  margin: '0 auto',
}

const logoWrap = {
  textAlign: 'center' as const,
  paddingBottom: '24px',
}

const logo = {
  margin: '0 auto',
}

const card = {
  backgroundColor: '#fff',
  border: '1px solid rgba(107,75,200,0.14)',
  borderRadius: '20px',
  padding: '36px 32px',
  boxShadow: '0 4px 24px rgba(107,75,200,0.08)',
}

const greeting = {
  fontSize: '17px',
  fontWeight: 800,
  color: BRAND_PURPLE,
  margin: '0 0 12px',
}

const paragraph = {
  fontSize: '15px',
  lineHeight: '1.7',
  color: '#4b5563',
  margin: '0 0 8px',
}

const sectionHeading = {
  fontSize: '12px',
  fontWeight: 800,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  color: BRAND_PURPLE,
  margin: '0 0 12px',
}

const hoursLine = {
  fontSize: '14px',
  color: '#4b5563',
  margin: '0 0 4px',
}

const hoursDay = {
  fontWeight: 700,
  color: '#3d3d3d',
}

const ctaButton = {
  display: 'inline-block',
  backgroundColor: ACCENT_ORANGE,
  color: '#fff',
  fontSize: '15px',
  fontWeight: 800,
  textDecoration: 'none',
  padding: '12px 28px',
  borderRadius: '100px',
  margin: '8px 0 4px',
}

const hr = {
  border: 'none',
  borderTop: '1px solid rgba(107,75,200,0.12)',
  margin: '20px 0',
}

const footer = {
  textAlign: 'center' as const,
  padding: '24px 12px 0',
}

const footerText = {
  fontSize: '12px',
  color: '#9ca3af',
  lineHeight: '1.6',
  margin: '0 0 4px',
}

const footerLink = {
  color: BRAND_PURPLE,
  fontWeight: 700,
  textDecoration: 'none',
}
