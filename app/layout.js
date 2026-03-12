import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

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
        <Script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" strategy="beforeInteractive" />
        <Script id="onesignal-init" strategy="afterInteractive">
          {`
          window.OneSignal = window.OneSignal || [];
          OneSignal.push(function() {
            OneSignal.init({
              appId: "f18b385a-9fbc-4cd7-88ea-6b81eab98d85",
              notifyButton: { 
                enable: true 
              }
            });
          });
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
