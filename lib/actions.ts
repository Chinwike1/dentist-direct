'use server'

import connectToDatabase from './connectdb'
import User, { UserDocument } from '@/models/userModel'

// Function to create a new user
export async function createUser(
  userDetails: Omit<UserDocument, '_id'>,
): Promise<UserDocument> {
  await connectToDatabase('dentist-direct')

  const user = new User()
  await user.save()
  return user
}
