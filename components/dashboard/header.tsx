'use client'
import { useAppStore } from '@/app/zustand'
import { ChevronDown } from 'lucide-react'
import { auth } from '@/auth'
import { NAVLENGTH } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useSession } from 'next-auth/react'
import { Suspense } from 'react'
import Loading from '@/app/dashboard/loading'
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
// import { useUserStore } from '@/app/zustand'

export default function Header() {
  // const { setUser } = useUserStore((state) => state)

  const { isNavExpanded } = useAppStore((state) => state)
  const { data: session } = useSession()

  // setUser(session?.user)
  const name = session?.user?.name as string
  const image = session?.user?.image as string

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
      <div className="flex flex-row items-center gap-3">
        <Suspense fallback={<Loading />}>
          <Avatar>
            <AvatarImage src={image} />
            {name ? <AvatarFallback>{GetInitials(name)}</AvatarFallback> : null}
          </Avatar>
        </Suspense>

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
    </motion.div>
  )
}
