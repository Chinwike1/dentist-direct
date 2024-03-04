import mongoose, { Schema, model, connect } from 'mongoose'

interface Appointments {
  service: string
  date: string
  time: string
  cost: number
}

interface User {
  first_name: string
  last_name: string
  email: string
  password?: string
  appointments: Appointments[]
}

const appointmentsSchema = new Schema<Appointments>({
  service: { type: String },
  date: { type: String },
  time: { type: String },
  cost: { type: Number },
})

const userSchema = new Schema<User>({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  appointments: [appointmentsSchema],
})

let userModel: any
// this logic prevents the code from trying to overwrite the created model
// sort of an SQL CREATE IF NOT EXISTS
if (mongoose.models.User) {
  userModel = mongoose.model<User>('User')
} else {
  userModel = mongoose.model<User>('User', userSchema)
}

export default userModel
