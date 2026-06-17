import type { ReactNode } from 'react'

// Minimal root layout required by Next.js — locale layout handles html/body.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children
}
