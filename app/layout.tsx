import './globals.css'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { fonts } from '@/lib/fonts'
import { Toaster } from '@/components/ui/toaster'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

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
          <div className="font-sans">
            <MantineProvider>{children}</MantineProvider>
          </div>
          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script> */}
        </Theme>
      </body>
    </html>
  )
}
