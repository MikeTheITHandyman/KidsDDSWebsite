'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { sendGAEvent } from '@/lib/gtag'

export default function SaveContactQR({ size = 96 }: { size?: number }) {
  const t = useTranslations('common')

  return (
    <div style={{ textAlign: 'center' }}>
      <Image
        src="/brand_assets/linktree-qr-code.png"
        alt={t('saveContactAlt')}
        width={size}
        height={size}
        style={{ margin: '0 auto', display: 'block', borderRadius: '0.5rem' }}
      />
      <a
        href="/brand_assets/kids-dentist-contact.vcf"
        download="Kids-Dentist-Contact.vcf"
        onClick={() => sendGAEvent('save_contact_clicked')}
        style={{
          display: 'inline-block',
          marginTop: '0.6rem',
          fontFamily: 'Nunito, sans-serif',
          fontWeight: 700,
          fontSize: '0.78rem',
          color: '#4A90A4',
          textDecoration: 'none',
        }}
      >
        {t('saveContactLabel')}
      </a>
    </div>
  )
}
