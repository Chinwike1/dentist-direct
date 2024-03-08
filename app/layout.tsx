import type { Metadata } from 'next'
import { DM_Sans, Quattrocento_Sans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/layout/navbar'
import { fonts } from '@/lib/fonts'

export const metadata: Metadata = {
  title: 'Dentist Direct',
  description: 'Expert dentistry services at your fingertips',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'font-sans antialiased',
          fonts,
          process.env.NODE_ENV === 'development' && 'debug-screens',
        )}
      >
        <Navbar />
        <div className="font-sans">{children}</div>
      </body>
    </html>
  )
}
