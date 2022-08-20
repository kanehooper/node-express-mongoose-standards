import mongoose from 'mongoose'

export default class Database {
  constructor() {}

  async connect() {
    await mongoose.connect(process.env.MONGO_DEVELOPMENT_URL)
    console.log('Mongo: Database connected'.blue)
  }
}
