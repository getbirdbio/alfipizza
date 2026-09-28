import Script from 'next/script'
import { GA_LINKER_DOMAINS, GA_MEASUREMENT_ID } from '@/lib/site'

export default function GoogleAnalytics() {
  const linkerDomains = JSON.stringify(GA_LINKER_DOMAINS)

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            linker: { domains: ${linkerDomains} }
          });
        `}
      </Script>
    </>
  )
}
