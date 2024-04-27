'use client'

import Logo from '../icons/logo'
import {
  HomeModernIcon,
  CalendarDaysIcon,
  PencilSquareIcon,
  CreditCardIcon,
  UserIcon,
  QuestionMarkCircleIcon,
  ArrowLeftCircleIcon,
} from '@heroicons/react/24/outline'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

import { HistoryIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import NavLink, { NavLinkType } from './nav-link'
import Burger from './burger'
import { signOut } from 'next-auth/react'
import { useAppStore } from '@/app/zustand'
import { motion } from 'framer-motion'
import { NAVLENGTH } from '@/lib/constants'
import Link from 'next/link'
import LogoutButton from '../ui/logout'

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
  {
    name: 'Help & Support',
    path: '#',
    icon: <QuestionMarkCircleIcon />,
  },
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
        'bg-aqua text-aqua-100 fixed z-50 flex h-full flex-col overflow-x-hidden py-6',
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
            'text-aqua-100 ml-4 text-2xl font-bold',
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

      {/* more nav links */}
      <ul className="mt-auto">
        {/* <NavLink
          data={{
            name: 'Logout',
            path: '#',
            icon: <ArrowLeftCircleIcon />,
          }}
        /> */}

        <AlertDialog>
          <AlertDialogTrigger className="flex justify-end" asChild>
            <div className="block p-4">
              {isNavExpanded ? (
                <motion.button className="text-aqua bg-aqua-100 m-auto flex w-full justify-center gap-4 rounded-md p-2 text-start font-medium hover:border-white">
                  {' '}
                  Logout{' '}
                </motion.button>
              ) : (
                <motion.button className="text-aqua-100 m-auto flex w-full justify-center gap-4 rounded-md text-start font-medium hover:border-white">
                  {' '}
                  <ArrowLeftCircleIcon className={cn('size-8')} />
                </motion.button>
              )}

              {/*             
              <Button
                className="text-aqua-100 m-auto flex w-full justify-center gap-4 rounded-md text-start font-medium hover:border-white"
                variant="ghost"
              >
                Logout
              </Button> */}
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                Sure you want to go?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>
                <LogoutButton />
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </ul>
    </motion.nav>
  )
}
