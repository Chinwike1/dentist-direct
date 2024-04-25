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
// import { useCheckSession } from '@/app/zustand'
import { useSession } from 'next-auth/react'
import { useDemoStore } from '@/app/zustand'

export default function Dashcard() {
  const { data: session } = useSession()

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Welcome to Dentist Direct</CardTitle>
        <CardDescription>
          Your premier appointment scheduling platform
        </CardDescription>
      </CardHeader>
      {session?.user?.name ? null : (
        <CardContent className="flex flex-col gap-4">
          <CardTitle className="font-bold">
            Please complete your profile to get the best experience
          </CardTitle>
          <Button className="text-xs">Complete Profile</Button>
        </CardContent>
      )}
    </Card>
  )
}
