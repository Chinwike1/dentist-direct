import type { Metadata } from 'next'
import { DM_Sans, Quattrocento_Sans } from 'next/font/google'
import './globals.css'
import { cn } from '@/app/lib/utils'

const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm_sans',
})
const quatt_sans = Quattrocento_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-quatt_sans',
})

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
          'antialiased',
          dm_sans.variable,
          quatt_sans.variable,
          process.env.NODE_ENV === 'development' && 'debug-screens',
        )}
      >
        <div className="font-sans">{children}</div>
      </body>
    </html>
  )
}
