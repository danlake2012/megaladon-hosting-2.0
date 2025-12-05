import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Megaladon Hosting — Shark-Fast Hosting',
  description: 'Veteran-owned, fast hosting with domain, email, SSL — built for performance.'
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
