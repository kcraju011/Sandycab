import './globals.css'
import { Inter } from 'next/font/google'

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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TaxiService",
              "name": "Sandy Taxi Service",
              "areaServed": "Goa",
              "telephone": "+91914868051",
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}

