'use client'
import { ChevronRightIcon } from 'lucide-react'
import ToothIcon from '../icons/tooth'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
  const pathname = usePathname()

  return (
    <>
      <header className="flex h-[75px] items-center px-8">
        <nav className="flex items-center">
          <Link href="/">
            <ToothIcon className="h-12 w-12 text-slate-100" />
          </Link>
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
          {/* show alternative auth action based on current route */}
          {pathname === '/login' ? (
            <Link
              href="/register"
              className="ml-auto flex items-center gap-2 rounded-2xl bg-slate-200 bg-opacity-20 px-3 py-2 transition-colors hover:bg-slate-100"
            >
              Register Now <ChevronRightIcon className="h-5 w-5" />
            </Link>
          ) : (
            <Link
              href="/login"
              className="ml-auto flex items-center gap-2 rounded-2xl bg-slate-200 bg-opacity-20 px-3 py-2 transition-colors hover:bg-slate-100"
            >
              Sign In <ChevronRightIcon className="h-5 w-5" />
            </Link>
          )}
        </div>
      </header>
      <hr className="mx-auto w-[95%] rounded-full border-[1.5px]" />
    </>
  )
}
