import User from '@/app/models/userModel'
import connectToDatabase from '@/lib/connectdb'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  await connectToDatabase('dentist-direct')
  const { email } = await request.json()
  const user = await User.findOne({ email })
  if (user) {
    return NextResponse.json({ user })
  } else {
    return NextResponse.json({ user: null })
  }
}
