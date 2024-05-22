import { cn } from '@/lib/utils'
import { LoaderCircleIcon } from 'lucide-react'

interface SpinnerProps {
  className?: string
  textLeft?: string
  textRight?: string
  size?: string
}

export default function Spinner({
  className,
  size,
  textLeft,
  textRight,
}: SpinnerProps) {
  return (
    <>
      {textLeft && <span>{textLeft}</span>}
      <LoaderCircleIcon
        className={cn(
          className,
          size ? `size-${size}` : 'size-5',
          'ml-3 animate-spin',
        )}
      />
      {textRight && <span>{textRight}</span>}
    </>
  )
}
