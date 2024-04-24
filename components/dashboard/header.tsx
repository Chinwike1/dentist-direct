'use client'
import { useAppStore } from '@/app/zustand'
import { NAVLENGTH } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export default function Header() {
  const { isNavExpanded } = useAppStore((state) => state)

  return (
    <motion.div
      initial={{
        marginLeft: isNavExpanded ? NAVLENGTH.expanded : NAVLENGTH.collapsed,
      }}
      animate={{
        marginLeft: isNavExpanded ? NAVLENGTH.expanded : NAVLENGTH.collapsed,
      }}
      className="flex h-[60px] items-center justify-end border-b-[1.5px]"
    >
      Header
    </motion.div>
  )
}
