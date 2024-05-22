import './globals.css'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { fonts } from '@/lib/fonts'
import { Toaster } from '@/components/ui/toaster'
import { Theme } from '@radix-ui/themes'

import '@radix-ui/themes/styles.css'

export const metadata: Metadata = {
  title: 'Dentist Direct',
  description: 'Expert dentistry services at your fingertips',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={cn(
          'font-sans antialiased',
          fonts,
          process.env.NODE_ENV === 'development' && 'debug-screens',
        )}
      >
        <Toaster />
        <Theme>
          <div className="font-sans">{children}</div>
        </Theme>
      </body>
    </html>
  )
}
