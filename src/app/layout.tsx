import type { Metadata } from 'next'
import './globals.css'
import RootLayoutClient from '@/components/RootLayoutClient'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alfipizza.co.za'),
  title: 'ALFI PIZZA | Cape Town\'s First Newhaven-Style Pizza 🍕',
  description: 'Bringing authentic Newhaven-style pizza to Sea Point, Cape Town. Handcrafted with love, baked to perfection.',
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <RootLayoutClient>{children}</RootLayoutClient>
} 