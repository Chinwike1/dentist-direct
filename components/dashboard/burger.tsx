'use client'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import { cn } from '@/lib/utils'
import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline'
import { useAppStore } from '@/app/zustand'

export default function Burger() {
  const { isNavExpanded, toggleNavExpanded } = useAppStore((state) => state)

  return (
    <div
      className={cn(
        'flex py-9',
        isNavExpanded ? 'justify-end' : 'justify-center',
      )}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            className={cn(
              'group flex items-center justify-center rounded-2xl border-2 p-3',
              isNavExpanded
                ? '-mr-3 border-aqua-100'
                : 'w-full border-transparent',
            )}
            onClick={() => toggleNavExpanded()}
          >
            <Bars3CenterLeftIcon
              className={cn(
                'size-5 stroke-aqua-100 stroke-2',
                !isNavExpanded && 'mx-auto rotate-180',
              )}
            />
          </TooltipTrigger>
          <TooltipContent
            className={cn('bg-aqua-100 text-aqua', isNavExpanded && 'hidden')}
          >
            Menu
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
