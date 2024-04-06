import './globals.css'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { fonts } from '@/lib/fonts'
<<<<<<< HEAD
import { Toaster } from '@/components/ui/toaster'
=======
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
>>>>>>> 72d843a8474eb70098cb1e68e172222cba937904

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
<<<<<<< HEAD
        <div className="font-sans">{children}</div>
        <Toaster />
=======
        <Theme>
          <div className="font-sans">{children}</div>
        </Theme>
>>>>>>> 72d843a8474eb70098cb1e68e172222cba937904
      </body>
    </html>
  )
}
