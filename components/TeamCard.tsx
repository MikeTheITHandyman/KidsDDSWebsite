import Image from 'next/image'

interface TeamCardProps {
  photoSrc: string
  firstName: string
  alt: string
  accent: string
}

export default function TeamCard({ photoSrc, firstName, alt, accent }: TeamCardProps) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '0.85rem' }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1',
          borderRadius: '28px',
          overflow: 'hidden',
          border: '1.5px solid rgba(74,144,164,0.16)',
          background: 'var(--bg)',
        }}
      >
        <Image
          src={photoSrc}
          alt={alt}
          fill
          sizes="(max-width: 580px) 45vw, (max-width: 900px) 30vw, 22vw"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Nametag — overlaps the photo's bottom edge */}
      <span
        style={{
          display: 'inline-block',
          position: 'relative',
          top: '-0.9rem',
          background: '#fff',
          border: `2px solid ${accent}`,
          borderRadius: '100px',
          padding: '0.32rem 1.1rem',
          fontFamily: 'Nunito, sans-serif',
          fontWeight: 800,
          fontSize: '0.88rem',
          color: 'var(--brand-purple)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          whiteSpace: 'nowrap',
        }}
      >
        {firstName}
      </span>
    </div>
  )
}
