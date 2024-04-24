'use client'

import Logo from '../icons/logo'
import {
  HomeModernIcon,
  CalendarDaysIcon,
  PencilSquareIcon,
  CreditCardIcon,
  UserIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline'
import { HistoryIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import NavLink, { NavLinkType } from './nav-link'
import Burger from './burger'
import { useAppStore } from '@/app/zustand'
import { motion } from 'framer-motion'
import { NAVLENGTH } from '@/lib/constants'
import Link from 'next/link'

const navLinks: NavLinkType[] = [
  {
    name: 'Home',
    path: '/dashboard',
    icon: <HomeModernIcon />,
  },
  {
    name: 'Book Appointment',
    path: '/dashboard/book',
    icon: <CalendarDaysIcon />,
  },
  {
    name: 'Manage Appointments',
    path: '/dashboard/manage',
    icon: <PencilSquareIcon />,
  },
  {
    name: 'Appointment History',
    path: '/dashboard/history',
    icon: <HistoryIcon />,
  },
  { name: 'Payments', path: '/dashboard/payments', icon: <CreditCardIcon /> },
]

export default function Sidebar() {
  const { isNavExpanded } = useAppStore((state) => state)

  return (
    <motion.nav
      initial={{
        width: isNavExpanded ? NAVLENGTH.expanded : NAVLENGTH.collapsed,
      }}
      animate={{
        width: isNavExpanded ? NAVLENGTH.expanded : NAVLENGTH.collapsed,
      }}
      transition={{ duration: 0.3, type: 'tween' }}
      aria-expanded={isNavExpanded}
      className={cn(
        'fixed z-50 flex h-full flex-col overflow-x-hidden bg-aqua py-6 text-aqua-100',
        !isNavExpanded && 'rounded-r-xl',
      )}
    >
      <Link href="/dashboard" className="flex items-center justify-center">
        <Logo />
        <motion.p
          initial={{
            opacity: isNavExpanded ? 1 : 0,
            fontSize: isNavExpanded ? '1.5rem' : 0,
          }}
          animate={{
            opacity: isNavExpanded ? 1 : 0,
            fontSize: isNavExpanded ? '1.5rem' : 0,
          }}
          transition={{ type: 'tween' }}
          className={cn(
            'ml-4 text-2xl font-bold text-aqua-100',
            !isNavExpanded && 'hidden',
          )}
        >
          Dentist Direct
        </motion.p>
      </Link>

      <Burger />

      {/* nav links */}
      <ul className="flex flex-col gap-6">
        {navLinks.map((link) => (
          <NavLink key={link.name} data={link} />
        ))}
      </ul>

      {/* divider */}
      <hr className="mx-auto mb-3 mt-12 w-[70%] rounded-sm border border-aqua-100 sm:border-none" />

      {/* more nav links */}
      <ul className="mt-auto">
        <NavLink
          data={{
            name: 'Profile',
            path: '/dashboard/profile',
            icon: <UserIcon />,
          }}
        />
        <NavLink
          data={{
            name: 'Help & Support',
            path: '#',
            icon: <QuestionMarkCircleIcon />,
          }}
        />
      </ul>
    </motion.nav>
  )
}
