import mongoose, { Schema, model, connect } from 'mongoose'

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
  password?: string
  appointments: AppointmentDocument[]
}

// Defining the Appointment Schema
const appointmentsSchema = new Schema<AppointmentDocument>({
  service: { type: String },
  date: { type: String },
  time: { type: String },
  cost: { type: Number },
})

// Defining the User Schema
const userSchema = new Schema<UserDocument>({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  appointments: [appointmentsSchema],
})

let User: any
// this logic prevents the code from trying to overwrite the created model
// sort of an SQL CREATE IF NOT EXISTS
if (mongoose.models.User) {
  User = mongoose.model<UserDocument>('User')
} else {
  User = mongoose.model<UserDocument>('User', userSchema)
}

export default User
