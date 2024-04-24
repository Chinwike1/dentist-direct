'use client'
import Logo from '../icons/logo'
import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinks = { name: string; path: string }

const navLinks: NavLinks[] = [
  {
    name: 'About Us',
    path: '/',
  },
  {
    name: 'Pricing',
    path: '/',
  },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="fixed left-0 top-0 flex h-[--nav-height] w-full items-center bg-white px-7 shadow-md">
      <Link href="/" className="">
        <Logo />
      </Link>
      <ul className="mx-auto ml-10 hidden gap-8 text-slate-900 lg:flex">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            className="font-light transition-colors hover:underline"
            href={link.path}
          >
            {link.name}
          </Link>
        ))}
      </ul>
      <div className="border- ml-auto flex gap-2">
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
            className="border-aqua text-aqua hover:bg-aqua hover:text-aqua-100 ml-auto flex items-center gap-2 rounded-2xl border-[1.5px] px-3 py-2 font-semibold transition-colors"
          >
            Register Now <ChevronRightIcon className="h-5 w-5" />
          </Link>
        ) : (
          <Link
            href="/login"
            className="border-aqua text-aqua hover:bg-aqua hover:text-aqua-100 ml-auto flex items-center gap-2 rounded-2xl border-[1.5px] px-3 py-2 font-semibold transition-colors"
          >
            Sign In <ChevronRightIcon className="h-5 w-5" />
          </Link>
        )}
      </div>
    </header>
  )
}
