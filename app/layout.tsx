import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Megaladon Hosting — Shark-Fast Hosting',
  description: 'Veteran-owned, fast hosting with domain, email, SSL — built for performance.',
  metadataBase: new URL('https://megaladonhosting.com'),
  openGraph: {
    title: 'Megaladon Hosting — Shark-Fast Hosting',
    description: 'Veteran-owned, fast hosting with domain, email, SSL — built for performance.',
    url: 'https://megaladonhosting.com',
    siteName: 'Megaladon Hosting',
    images: ['/assets/images/mega-hero.jpg'],
    type: 'website'
  },
  keywords: ['web hosting','veteran-owned','domain registration','WordPress hosting','WHMCS','secure hosting','SSD hosting']
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
