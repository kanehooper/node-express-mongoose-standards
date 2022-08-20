/* eslint-disable no-undef */
import colors from 'colors'
import Database from './database/Database.js'
import dotenv from 'dotenv'
import Server from './server/Server.js'

dotenv.config({ path: 'src/config/config.env' })
const port = process.env.PORT ?? 8080
const nodeEnv = process.env.NODE_ENV ?? 'production'

try {
  const database = new Database()
  await database.connect()
  const server = new Server(nodeEnv)
  await server.start(port)
} catch (error) {
  console.log(error)
  process.exit(1)
}
