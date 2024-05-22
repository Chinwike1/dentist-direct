import mongoose, { Schema, models, connect } from 'mongoose'

// Defining the User Object Type
export interface UserDocument {
  firstname: string
  lastname: string
  email: string
  provider?: string
}

// Defining the User Schema
const userSchema = new Schema<UserDocument>(
  {
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String, required: true, unique: true },
    provider: { type: String, required: true },
  },
  { timestamps: true },
)

// this logic prevents the code from trying to overwrite the created model
// sort of an SQL CREATE IF NOT EXISTS
const User =
  models.User || mongoose.model<UserDocument>('User', userSchema, 'users')
export default User
