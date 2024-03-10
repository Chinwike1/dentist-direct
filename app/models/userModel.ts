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
  first_name: string
  last_name: string
  email: string
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
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    appointments: [appointmentsSchema],
  },
  { timestamps: true },
)

// this logic prevents the code from trying to overwrite the created model
// sort of an SQL CREATE IF NOT EXISTS
const User = models.User || mongoose.model<UserDocument>('User', userSchema)
export default User
