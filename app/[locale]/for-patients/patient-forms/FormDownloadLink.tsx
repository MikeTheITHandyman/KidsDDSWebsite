'use client'

import { sendGAEvent } from '@/lib/gtag'

interface FormDownloadLinkProps {
  href: string
  fileName: string
  ariaLabel: string
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

export default function FormDownloadLink({
  href,
  fileName,
  ariaLabel,
  className,
  style,
  children,
}: FormDownloadLinkProps) {
  return (
    <a
      href={href}
      download
      aria-label={ariaLabel}
      className={className}
      style={style}
      onClick={() => sendGAEvent('form_download', { file_name: fileName })}
    >
      {children}
    </a>
  )
}
