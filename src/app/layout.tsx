import type { Metadata } from 'next'
import './globals.css'
import RootLayoutClient from '@/components/RootLayoutClient'

export const metadata: Metadata = {
  title: 'ALFI PIZZA | Newhaven-Pizza 🍕',
  description: 'Bringing authentic Newhaven-Pizza to Sea Point, Cape Town. Handcrafted with love, baked to perfection.',
  icons: {
    icon: '/pizzas/Alfi_icon_loyalty.png',
    shortcut: '/pizzas/Alfi_icon_loyalty.png',
    apple: '/pizzas/Alfi_icon_loyalty.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <RootLayoutClient>{children}</RootLayoutClient>
} 