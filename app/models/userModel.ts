import { CalendlyToken } from '@/types'
import mongoose, { Schema, models } from 'mongoose'

// Defining the User Object Type
export interface UserDocument {
  firstname: string
  lastname: string
  email: string
  avatar_url: string
  provider: string
  calendly_token: CalendlyToken
}

// Defining the User Schema
const userSchema = new Schema<UserDocument>(
  {
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String, required: true, unique: true },
    avatar_url: { type: String },
    provider: { type: String, required: true },
    calendly_token: {
      access_token: { type: String },
      refresh_token: { type: String },
      expires_in: { type: String },
    },
  },
  { timestamps: true },
)

// this logic prevents the code from trying to overwrite the created model
// sort of an SQL CREATE IF NOT EXISTS
const User =
  models.User || mongoose.model<UserDocument>('User', userSchema, 'users')
export default User
