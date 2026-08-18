'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { sendGAEvent } from '@/lib/gtag'

const LINKTREE_URL = 'https://linktr.ee/Kidsdentistgrayslake?utm_source=linktree_profile_share'

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
        href={LINKTREE_URL}
        target="_blank"
        rel="noopener noreferrer"
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
