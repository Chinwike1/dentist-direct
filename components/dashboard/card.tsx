'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '../ui/button'
import { Skeleton } from '../ui/skeleton'

import { useSession } from 'next-auth/react'
import { useAppStore } from '@/app/zustand'
import { useEffect } from 'react'

export default function Dashcard() {
  const { user } = useAppStore((state) => state)
  useEffect(() => {
    console.log(user)
  }, [user])

  const { data: session } = useSession()

  return session ? (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Welcome to Dentist Direct</CardTitle>
        <CardDescription>
          Your premier appointment scheduling platform
        </CardDescription>
      </CardHeader>
      {user?.name ? null : (
        <CardContent className="flex flex-col gap-4">
          <CardTitle className="font-bold">
            Please complete your profile to get the best experience
          </CardTitle>
          <Button className="text-xs">Complete Profile</Button>
        </CardContent>
      )}
    </Card>
  ) : (
    <Skeleton className="h-12 w-full" />
  )
}
