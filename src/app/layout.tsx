import type { Metadata } from 'next'
import './globals.css'
import RootLayoutClient from '@/components/RootLayoutClient'
import MetaPixel from '@/components/MetaPixel'
import JsonLd from '@/components/JsonLd'
import {
  OG_IMAGE_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_URL,
  OG_IMAGE_WIDTH,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
} from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
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
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: 'website',
    siteName: 'Alfi Pizza',
    locale: 'en_ZA',
    images: [
      {
        url: OG_IMAGE_URL,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE_URL],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RootLayoutClient>
      <JsonLd />
      <MetaPixel />
      {children}
    </RootLayoutClient>
  )
} 