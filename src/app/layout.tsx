import type { Metadata } from 'next'
import './globals.css'
import RootLayoutClient from '@/components/RootLayoutClient'

export const metadata: Metadata = {
  title: 'ALFI PIZZA | Cape Town\'s First Newhaven-Style Pizza 🍕',
  description: 'Bringing authentic Newhaven-style pizza to Sea Point, Cape Town. Handcrafted with love, baked to perfection.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <RootLayoutClient>{children}</RootLayoutClient>
} 