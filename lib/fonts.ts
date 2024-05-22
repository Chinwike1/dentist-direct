import { DM_Sans, Quattrocento_Sans } from 'next/font/google'

const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dm_sans',
  display: 'swap',
  adjustFontFallback: false,
})
const quatt_sans = Quattrocento_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-quatt_sans',
  display: 'swap',
  adjustFontFallback: false,
})

export const fonts = [dm_sans.variable, quatt_sans.variable]
