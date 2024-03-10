import mongoose, { ConnectOptions } from 'mongoose'
import colors from 'colors'

const uri: string | undefined = process.env.MONGODB_URI // importing env variable

const clientOptions: ConnectOptions = {
  // defining connection options
  serverApi: { version: '1', strict: true, deprecationErrors: true },
}

let isConnected = false

//function to connect to db
export default async function connectToDatabase(
  database: string,
): Promise<void> {
  try {
    if (!uri) {
      throw new Error('MongoDB URI not provided')
    }
    if (isConnected) {
      console.log(colors.green('✔ Already connected to MongoDB'))
      return
    }
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions)
    await mongoose.connection.db.admin().command({ ping: 1 })
    const db = mongoose.connection.useDb(database)
    console.log(
      colors.green(
        `✔ Pinged your database. You successfully connected to the '${database}' DB in your MongoDB Cluster!`,
      ),
    )
    isConnected = true
  } catch (error) {
    //    finally {
    //     // Ensures that the client will close when you finish/error
    //     await mongoose.disconnect()
    //   }
    console.error('Error connecting to MongoDB', error)
    throw error
  }
}
