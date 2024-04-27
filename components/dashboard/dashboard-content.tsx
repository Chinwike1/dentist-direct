'use client'

import { useAppStore } from '@/app/zustand'
import { NAVLENGTH } from '@/lib/constants'
import { motion } from 'framer-motion'

export default function DashboardContent({
  children,
}: {
  children: React.ReactNode
}) {
  const { isNavExpanded } = useAppStore((state) => state)

  return (
    <motion.main
      initial={{
        marginLeft: isNavExpanded ? NAVLENGTH.expanded : NAVLENGTH.collapsed,
      }}
      animate={{
        marginLeft: isNavExpanded ? NAVLENGTH.expanded : NAVLENGTH.collapsed,
      }}
      transition={{ type: 'tween' }}
      className="min-h-screen"
    >
      {children}
    </motion.main>
  )
}
