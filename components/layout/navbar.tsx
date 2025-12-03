'use client'
import Logo from '../icons/logo'
import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinks = { name: string; path: string }

// const navLinks: NavLinks[] = [
//   {
//     name: 'About Us',
//     path: '/',
//   },
//   {
//     name: 'Pricing',
//     path: '/',
//   },
// ]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="fixed left-0 top-0 flex h-[--nav-height] w-full items-center bg-white px-7 shadow-md">
      <Link href="/" className="flex items-center gap-3">
        <Logo />
        <span className="font-bold text-aqua hidden sm:block">Dentist Direct</span>
      </Link>
      <div className="ml-auto flex gap-2">
        <Link
          href="/dashboard?action=book"
          className="ml-auto hidden items-center rounded-full px-3 py-2 transition-colors hover:underline md:flex"
        >
          Book Appointment
        </Link>
        {/* show alternative auth action based on current route */}
        {pathname === '/login' ? (
          <Link
            href="/register"
            className="ml-auto flex items-center gap-2 rounded-md px-3 py-2 font-semibold text-aqua transition-colors hover:bg-aqua-100"
          >
            Register Now <ChevronRightIcon className="h-5 w-5" />
          </Link>
        ) : (
          <Link
            href="/login"
            className="ml-auto flex items-center gap-2 rounded-md px-3 py-2 font-semibold text-aqua transition-colors hover:bg-aqua-100"
          >
            Sign In <ChevronRightIcon className="h-5 w-5" />
          </Link>
        )}
      </div>
    </header>
  )
}
