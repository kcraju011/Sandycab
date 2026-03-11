import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import OneSignalInit from './components/OneSignalInit'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sandy Taxi Service | Best Taxi Service in Goa | Airport Pickup',
  description: 'Book reliable taxi service in Goa with Sandy Taxi Service. Airport pickup, one way taxi, sightseeing tours and affordable cab booking available.',
  keywords: [
    'Goa taxi service',
    'Taxi in Goa',
    'Goa airport taxi',
    'Cab booking Goa',
    'One way taxi Goa',
    'Goa sightseeing taxi',
    'North Goa taxi',
    'South Goa taxi',
    'Goa airport transfer',
    'Goa outstation taxi'
  ],
  authors: [{ name: 'Sandy Taxi Service' }],
  openGraph: {
    title: 'Sandy Taxi Service | Goa Taxi Booking',
    description: 'Affordable taxi service in Goa. Airport pickup, sightseeing taxi and one way cab booking.',
    url: 'https://sandytaxi.com',
    siteName: 'Sandy Taxi Service',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'jlHDjFTOR0nvR5nCBdcxthhq3plWnNwIrZmtPr6N9PM',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer strategy="afterInteractive" />
        <Script id="OneSignal-init" strategy="afterInteractive">
          {`
            window.OneSignalDeferred = window.OneSignalDeferred || [];
            OneSignalDeferred.push(async function(OneSignal) {
              await OneSignal.init({
                appId: "88e59e90-98f2-4503-a819-20387ee1595a",
                safari_web_id: "web.onesignal.auto.5f176c09-6482-49c9-87ea-0c57aa3981a0",
                notifyButton: {
                  enable: true,
                },
              });
            });
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TaxiService",
              "name": "Sandy Taxi Service",
              "areaServed": "Goa",
              "telephone": "+918867193161",
              "url": "https://sandytaxi.com",
              "priceRange": "$$",
              "description": "Best taxi service in Goa for airport transfers, sightseeing tours, and outstation trips.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Goa",
                "addressRegion": "Goa",
                "addressCountry": "India"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <OneSignalInit />
        {children}
      </body>
    </html>
  )
}

