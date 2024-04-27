'use client'

import Logo from '../icons/logo'
import {
  HomeModernIcon,
  CalendarDaysIcon,
  PencilSquareIcon,
  CreditCardIcon,
  QuestionMarkCircleIcon,
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
import { ArrowLeftToLineIcon, HistoryIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import NavLink, { NavLinkType } from './nav-link'
import Burger from './burger'
import { useAppStore } from '@/app/zustand'
import { motion } from 'framer-motion'
import { NAVLENGTH } from '@/lib/constants'
import Link from 'next/link'
import LogoutButton from '../ui/logout'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'

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

      {/* Logout Button & D */}
      <AlertDialog>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="mt-6" asChild>
              <AlertDialogTrigger className="flex justify-end" asChild>
                <div className="block">
                  <button
                    className={cn(
                      'm-auto flex w-[85%] justify-center gap-4 rounded-md border-2 p-2 text-start font-medium text-aqua-100',
                      isNavExpanded
                        ? 'hover:bg-aqua-100 hover:text-aqua'
                        : 'border-none',
                    )}
                  >
                    {isNavExpanded ? (
                      'Logout'
                    ) : (
                      <ArrowLeftToLineIcon className={cn('size-6')} />
                    )}
                  </button>
                </div>
              </AlertDialogTrigger>
            </TooltipTrigger>
            <TooltipContent
              className={cn('bg-aqua-100 text-aqua', isNavExpanded && 'hidden')}
            >
              Logout
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Sign out of Dentist Direct?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to go?
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
    </motion.nav>
  )
}
