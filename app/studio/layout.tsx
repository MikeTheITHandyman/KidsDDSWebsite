/**
 * Bare layout for the embedded Sanity Studio.
 * Prevents the site Header/Footer (defined in the root layout) from
 * visually competing with the Studio UI.  The <html>/<body> are still
 * owned by app/layout.tsx; we just strip the site chrome via CSS here.
 */
export const metadata = {
  title: 'Kids Dentist · Content Studio',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <style>{`
        /* Hide site Header and Footer inside the studio route */
        .site-header { display: none !important; }
        footer        { display: none !important; }
        /* Let the studio take the full viewport */
        .main-content {
          max-width: unset !important;
          padding: 0 !important;
          margin: 0 !important;
        }
      `}</style>
      {children}
    </>
  )
}
