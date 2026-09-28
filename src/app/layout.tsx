import type { Metadata } from 'next'
import './globals.css'
import RootLayoutClient from '@/components/RootLayoutClient'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alfipizza.co.za'),
  title: 'ALFI PIZZA | Newhaven-Pizza 🍕',
  description: 'Bringing authentic Newhaven-Pizza to Sea Point, Cape Town. Handcrafted with love, baked to perfection.',
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'LfSWmvCw_9cv8hZAO-0KleQqizcE8sS32qnuMI1388g',
  },
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