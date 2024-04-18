import User from '@/app/models/userModel'
import connectToDatabase from '@/lib/connectdb'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  await connectToDatabase('dentist-direct')
  const { email } = await request.json()
  const userExists = await User.findOne({ email })
  if (userExists) {
    return NextResponse.json({ userExists: true })
  } else {
    return NextResponse.json({ userExists: false })
  }
}
