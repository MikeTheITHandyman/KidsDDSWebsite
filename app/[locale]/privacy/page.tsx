import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import { Link } from '@/navigation'
import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { setRequestLocale } from 'next-intl/server'
import { ogLocale, localizedUrl, localeAlternates } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const title = 'Privacy Policy | Kids Dentist Grayslake, IL'
  const description = 'How Kids Dentist collects, uses, and protects information gathered from visitors to kidsdds.com.'
  return {
    title,
    description,
    alternates: { canonical: localizedUrl('/privacy', locale), languages: localeAlternates('/privacy') },
    openGraph: {
      title,
      description,
      url: localizedUrl('/privacy', locale),
      siteName: 'Kids Dentist',
      locale: ogLocale(locale),
      type: 'website',
    },
  }
}

const headingStyle: CSSProperties = {
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 900,
  fontSize: '1.2rem',
  color: '#4A90A4',
  margin: '2.5rem 0 0.9rem',
}

const paraStyle: CSSProperties = {
  fontSize: '0.92rem',
  lineHeight: 1.75,
  color: '#4b5563',
  marginBottom: '1rem',
}

const listStyle: CSSProperties = {
  margin: '0 0 1rem',
  paddingLeft: '1.4rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.55rem',
}

const listItemStyle: CSSProperties = {
  fontSize: '0.92rem',
  lineHeight: 1.7,
  color: '#4b5563',
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <SubPageLayout kicker="Legal" title="Privacy Policy" gradient="blue">
      <div className="mx-auto max-w-3xl px-4">
        <AnimatedSection>
          <article>
            <p style={paraStyle}>
              We have prepared this Privacy Notice to explain how, why, and when we collect data from you on our website.
            </p>
            <p style={paraStyle}>
              Please note that this Privacy Notice only applies to data that we collect when you visit our website.
            </p>

            <h2 style={headingStyle}>1. What data we collect and how we use it</h2>
            <p style={paraStyle}>
              We may collect the following categories of information on our website and use them for the purposes explained below.
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}><strong>Website activity:</strong> Data about your browsing activity on our website.</li>
              <li style={listItemStyle}><strong>Device and browser information:</strong> Technical information about the device or browser you use to access our website. For example, your device&apos;s IP address, and (in the case of mobile devices) your device type and mobile device&apos;s unique identifier such as the Apple IDFA or Android Advertising ID.</li>
              <li style={listItemStyle}><strong>Contact Information:</strong> If you choose to provide your name, email address or phone number.</li>
              <li style={listItemStyle}><strong>Customer Service Information:</strong> Information you may provide to customer service including survey responses.</li>
              <li style={listItemStyle}><strong>Financial Information:</strong> Credit card number or other payment account information.</li>
              <li style={listItemStyle}><strong>Third party information:</strong> We may collect additional information about you from third party sources where we have the rights to do so.</li>
            </ul>
            <p style={paraStyle}>We use this data to:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Customize, measure, and improve our website and services.</li>
              <li style={listItemStyle}>Deliver targeted marketing to you.</li>
            </ul>

            <h2 style={headingStyle}>2. Data Sharing</h2>
            <p style={paraStyle}>We may disclose information about you:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}><strong>With our service providers:</strong> Companies we contract with who help with parts of our business operations. We require that our service providers only use your information in connection with the services they perform for us.</li>
              <li style={listItemStyle}><strong>With your service providers:</strong> Companies under contract with, or acting on your behalf, who handle data (such as a customer lists) on your behalf.</li>
              <li style={listItemStyle}>With our subsidiaries and related companies.</li>
              <li style={listItemStyle}><strong>In connection with legal proceedings:</strong> When we are under a legal obligation to do so, for example to comply with a binding order of a court, or where disclosure is necessary to exercise, establish or defend our legal rights, our Advertisers or any other third party.</li>
              <li style={listItemStyle}><strong>In connection with a sale of our business:</strong> If a third party acquires some or all of our business or assets, we may disclose your information in connection with the sale.</li>
            </ul>
            <p style={paraStyle}>
              We also share technical data that we collect about your browsing habits and your device (such as data relating to our cookies, tracking pixels and similar technologies) with advertising companies in the digital advertising ecosystem.
            </p>
            <p style={paraStyle}>Finally, we may disclose aggregated, anonymized information to third parties.</p>

            <h2 style={headingStyle}>3. Cookies and related technologies</h2>
            <p style={paraStyle}>
              This website uses cookies, tracking pixels and related technologies. Cookies are small data files that are served by our platform and stored on your device. Our site uses cookies dropped by us or third parties for a variety of purposes including to operate and personalize the website. Also, cookies may also be used to track how you use the site to target ads to you on other websites.
            </p>

            <h2 style={headingStyle}>4. Your choices and opting-out</h2>
            <p style={paraStyle}>
              We recognize how important your online privacy is to you, so we offer the following options for controlling the targeted ads you receive and how we use your data:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>We comply with the Self-Regulatory Principles for Online Behavioral Advertising as managed by the Digital Advertising Alliance (DAA). You may opt out of receiving targeted ads from companies that perform ad targeting services, including some that we may work with, via the DAA website.</li>
              <li style={listItemStyle}>We also comply with the Canadian Self-Regulatory Principles for Online Behavioral Advertising as managed by the Digital Advertising Alliance of Canada (DAAC). You may opt out of receiving targeted ads from companies that perform ad targeting services, via the DAAC website.</li>
              <li style={listItemStyle}>We also adhere to the European Interactive Digital Advertising Alliance (EDAA) guidelines for online advertising and you may opt out via their Your Online Choices website.</li>
            </ul>
            <p style={paraStyle}>Please note that when using the ad industry opt-out tools described above:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}>If you opt out, we may still collect some data about your online activity for operational purposes, but it won&apos;t be used by us for the purpose of targeting ads to you.</li>
              <li style={listItemStyle}>If you use multiple browsers or devices you may need to execute this opt out on each browser or device.</li>
              <li style={listItemStyle}>Other ad companies&apos; opt-outs may function differently than our opt-out.</li>
            </ul>
            <p style={paraStyle}>
              You can request that we stop email marketing to you by <Link href="/contact" style={{ color: '#4A90A4', fontWeight: 700, textDecoration: 'underline' }}>contacting our office</Link>.
            </p>
            <p style={paraStyle}>
              Some internet browsers allow users to send a &quot;Do Not Track&quot; signal to websites they visit. We do not respond to this signal.
            </p>
            <p style={paraStyle}>
              In addition, if you are located in the European Economic Area you may also have the right to access, correct or update some of the information we hold about you. You can also request that we delete your information.
            </p>

            <h2 style={headingStyle}>5. Data Retention</h2>
            <p style={paraStyle}>
              Identifiable information about you is held no longer than necessary for our business purposes or to meet legal requirements.
            </p>

            <h2 style={headingStyle}>6. Security</h2>
            <p style={paraStyle}>
              We apply technical, administrative and organizational security measures to protect the data we collect against accidental or unlawful destruction and loss, alteration, unauthorized disclosure or access, in particular where the processing involves the transmission of data over a network, and against other unlawful forms of processing.
            </p>

            <h2 style={headingStyle}>7. International transfers</h2>
            <p style={paraStyle}>
              We may transfer the information we collect about you to countries other than the country where we originally collected it for the purposes of storage and processing of data and operating our services. Those countries may not have the same data protection laws as your country. However, when we transfer your information to other countries, we will protect that information as described in this Privacy Notice and take steps, where necessary, to ensure that international transfers comply with applicable laws. For example, if we transfer your information from the European Economic Area to a country outside it, such as the United States, we will seek to take additional steps such as entering into EU compliant data transfer agreements with the data importer where necessary.
            </p>

            <h2 style={headingStyle}>8. Changes to this Privacy Notice</h2>
            <p style={paraStyle}>
              Changes to this Privacy Notice will be posted on this page. If we make a material change to our privacy practices, we will provide notice on the site or by other means as appropriate.
            </p>

            <h2 style={headingStyle}>9. Contact us about questions or concerns</h2>
            <p style={{ ...paraStyle, marginBottom: 0 }}>
              If you have any questions about this Privacy Notice or our privacy practices, you can{' '}
              <Link href="/contact" style={{ color: '#4A90A4', fontWeight: 700, textDecoration: 'underline' }}>contact our office</Link>.
            </p>
          </article>
        </AnimatedSection>
      </div>
    </SubPageLayout>
  )
}
