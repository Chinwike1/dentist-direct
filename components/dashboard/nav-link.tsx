'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Tooltip, TooltipProvider } from '@radix-ui/react-tooltip'
import { TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { useAppStore } from '@/app/zustand'
import { motion } from 'framer-motion'

export interface NavLinkType {
  name: string
  path: string
  icon?: React.ReactNode
}

interface NavLinkProps {
  data: NavLinkType
}

export default function NavLink({ data }: NavLinkProps) {
  const { isNavExpanded } = useAppStore((state) => state)
  const pathname = usePathname()

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={data.path}
            className={cn(
              'hover:border-aqua-100 ml-auto flex h-[55px] items-center gap-4 border-2 border-transparent transition-colors',
              pathname === data.path && 'text-aqua bg-aqua-100',
              isNavExpanded && 'w-[90%] rounded-l-2xl p-4',
              !isNavExpanded && 'mx-auto w-fit rounded-[18px] p-3',
            )}
          >
            <span className={cn('size-6')}>{data.icon}</span>
            <motion.li
              initial={{
                opacity: isNavExpanded ? 1 : 0,
                fontSize: isNavExpanded ? '1rem' : 0,
              }}
              animate={{
                opacity: isNavExpanded ? 1 : 0,
                fontSize: isNavExpanded ? '1rem' : 0,
              }}
              transition={{ delay: 0.05 }}
              className={cn(!isNavExpanded && 'hidden')}
            >
              {data.name}
            </motion.li>
          </Link>
        </TooltipTrigger>
        <TooltipContent
          className={cn('bg-aqua-100 text-aqua', isNavExpanded && 'hidden')}
        >
          {data.name}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
