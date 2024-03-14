'use client'
import { ChevronRightIcon } from 'lucide-react'
import ToothIcon from '../icons/tooth'
import Link from 'next/link'

type NavLinks = { name: string; path: string }

const navLinks: NavLinks[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About Us',
    path: '/',
  },
  {
    name: 'Services',
    path: '/',
  },
  {
    name: 'News',
    path: '/',
  },
]

export default function Navbar() {
  return (
    <div>
      <header className="flex h-[75px] items-center px-8">
        <nav className="flex items-center">
          <ToothIcon className="h-12 w-12 text-slate-100" />
          <ul className="ml-10 hidden gap-8 text-slate-900 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                className="font-light transition-colors hover:text-black hover:underline"
                href={link.path}
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex gap-2">
          <Link
            href="/dashboard?action=new_appointment"
            className="ml-auto hidden items-center rounded-full px-3 py-2 transition-colors hover:underline md:flex"
          >
            Book Appointment
          </Link>
          <Link
            href="/api/auth/signin"
            className="ml-auto flex items-center gap-2 rounded-2xl bg-slate-200 bg-opacity-20 px-3 py-2 transition-colors hover:bg-slate-100"
          >
            Sign In <ChevronRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </header>
      <hr className="mx-auto w-[95%] rounded-full border-[1.5px]" />
    </div>
  )
}
