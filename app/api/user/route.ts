import User from '@/app/models/userModel'
import connectToDatabase from '@/lib/connectdb'

import { NextResponse, NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const { firstname, lastname, email } = await request.json()
  await connectToDatabase('dentist-direct')
  await User.create({ firstname, lastname, email })
  return NextResponse.json({ message: 'User Registered' }, { status: 201 })
}
