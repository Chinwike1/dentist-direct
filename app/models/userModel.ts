import mongoose, { Schema, models, connect } from 'mongoose'

// Defining the Appointment Object Type
interface AppointmentDocument {
  service: string
  date: string
  time: string
  cost: number
}

// Defining the User Object Type
export interface UserDocument {
  firstname: string
  lastname: string
  email: string
  password?: string
  provider?: string
  appointments?: AppointmentDocument[]
}

// Defining the Appointment Schema
const appointmentsSchema = new Schema<AppointmentDocument>(
  {
    service: { type: String },
    date: { type: String },
    time: { type: String },
    cost: { type: Number },
  },
  { timestamps: true },
)

// Defining the User Schema
const userSchema = new Schema<UserDocument>(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    provider: { type: String },
    password: { type: String },
    appointments: [appointmentsSchema],
  },
  { timestamps: true },
)

// this logic prevents the code from trying to overwrite the created model
// sort of an SQL CREATE IF NOT EXISTS
const User =
  models.User || mongoose.model<UserDocument>('User', userSchema, 'users')
export default User
