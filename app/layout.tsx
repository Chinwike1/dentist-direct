import './globals.css'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { fonts } from '@/lib/fonts'
import { Toaster } from '@/components/ui/toaster'

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
        <div className="font-sans">{children}</div>
        <Toaster />
      </body>
    </html>
  )
}
