import User from '@/app/models/userModel'
import { auth } from '@/auth'
import connectToDatabase from '@/lib/connectdb'
import { CalendlyToken } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  // parse code from calendly request
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')

  if (!code) {
    return NextResponse.json(
      { error: 'Code parameter is missing' },
      { status: 403 },
    )
  }

  console.log('Calendly auth code: ' + code)

  try {
    // convert auth token to base64 as required by the Calendly API
    let authcode
    authcode = btoa(
      process.env.NEXT_PUBLIC_CALENDLY_CLIENT_ID +
        ':' +
        process.env.CALENDLY_CLIENT_SECRET,
    )

    // exchange auth code for access token
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CALENDLY_AUTH_BASE_URL}/oauth/token`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${authcode}`,
          Accept: 'application/json',
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          code,
          redirect_uri: process.env.NEXT_PUBLIC_CALENDLY_REDIRECT_URI,
        }).toString(),
      },
    )
    const response = await res.json()
    const { access_token, refresh_token, expires_in } = response

    // save calendly tokens in DB
    await connectToDatabase('dentist-direct')
    const session = await auth()

    let calendly_token: CalendlyToken = {
      access_token,
      refresh_token,
      expires_in,
    }

    const updated_user = await User.findByIdAndUpdate(
      session?.user?.id,
      {
        $set: {
          calendly_token,
        },
      },
      { new: true },
    )
    console.log('Calendly tokens saved to DB')
    return NextResponse.redirect(new URL('/dashboard', req.url))
  } catch (e) {
    console.error('Error retreiving access token: ', e)
    return NextResponse.json(
      { error: 'Error retreiving access token' },
      { status: 500 },
    )
  }
}
