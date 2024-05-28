import { redirect } from 'next/navigation'
import { auth } from '@/auth'
import { NextResponse } from 'next/server'

export async function GET() {
  const session = await auth()

  if (!session) {
    return NextResponse.json(
      { message: 'Unauthorized Request' },
      { status: 401 },
    )
  }

  // get calendly authorization code
  redirect(
    `${process.env.NEXT_PUBLIC_CALENDLY_AUTH_BASE_URL}/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_CALENDLY_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(process.env.NEXT_PUBLIC_CALENDLY_REDIRECT_URI)}`,
  )
}
