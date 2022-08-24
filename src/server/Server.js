import express from 'express'
import expressLogger from 'morgan'

import { router } from '../routes/students.js'

export default class Server {
  constructor(nodeEnv) {
    this.nodeEnv = nodeEnv
    this.app = express()
  }

  async start(port) {
    this.#mountMiddleware()
    this.#mountRouters()
    await this.#listen(port)
  }

  #mountMiddleware() {
    if (this.nodeEnv === 'development') {
      this.app.use(expressLogger('dev'))
    }
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    console.log('Express: All middleware mounted'.green)
  }

  #mountRouters() {
    this.app.use('/api/v1/students', router)
    console.log('Express: All routers mounted'.green)
  }

  async #listen(port) {
    if (isNaN(port)) {
      throw new Error(`Express: Port ${port} is not a valid number`.red)
    }
    await this.app.listen(port, () => {
      console.log(`Express: Server listening on port ${port}`.green)
    })
  }
}
