'use client'

import { ChevronDown } from 'lucide-react'
import { Skeleton } from '../ui/skeleton'
import { auth } from '@/auth'
import { NAVLENGTH } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useSession } from 'next-auth/react'
import { Suspense, useEffect, useState } from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import GetInitials from '@/lib/getInitials'
import { motion } from 'framer-motion'
import { useAppStore } from '@/app/zustand'

export default function Header() {
  const { isNavExpanded, setUser } = useAppStore((state) => state)
  const { data: session } = useSession()

  const name = session?.user?.name as string
  const image = session?.user?.image as string

  useEffect(() => {
    setUser(session?.user)
  }, [session])

  return (
    <motion.div
      initial={{
        marginLeft: isNavExpanded ? NAVLENGTH.expanded : NAVLENGTH.collapsed,
      }}
      animate={{
        marginLeft: isNavExpanded ? NAVLENGTH.expanded : NAVLENGTH.collapsed,
      }}
      className="flex h-[60px] items-center justify-end border-b-[1.5px] px-12"
    >
      {session ? (
        <div className="flex flex-row items-center gap-3">
          <Avatar>
            <AvatarImage src={image} />
            {name ? <AvatarFallback>{GetInitials(name)}</AvatarFallback> : null}
          </Avatar>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center justify-between gap-1 font-black">
              {name ? session?.user?.name : session?.user?.email}
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <Skeleton className="h-4 w-[200px]" />
      )}
    </motion.div>
  )
}
