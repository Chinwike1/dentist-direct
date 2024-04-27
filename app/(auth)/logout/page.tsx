'use client'
import Link from 'next/link'
import LogoutButton from '@/components/ui/logout'

import { signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function Logout() {
  return (
    <>
      <div className="border-red relative  h-screen w-screen border border-black">
        <div className="absolute left-1/2 top-1/2 m-auto">
          <h2>Are you sure you want to logout?</h2>
          <div className="flex flex-row justify-between space-x-4">
            <button>
              <Link href="/dashboard">Go back</Link>
            </button>

            <LogoutButton />
          </div>
        </div>
      </div>
    </>
  )
}
