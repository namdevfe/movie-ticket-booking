import express from 'express'
import cors from 'cors'
import { env } from './config/environment'
import connectDB from './config/connectDB'
import initRoutes from './routes/v1'
import { errorHandlingMiddleware } from '~/middlewares/errorHandlingMiddleware'
import { corsOptions } from '~/config/cors'

const START_SERVER = () => {
  const app = express()

  app.use(cors(corsOptions))

  // Enable receive data from x-www-form-urlencode mode
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  connectDB()

  initRoutes(app)

  app.use(errorHandlingMiddleware)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    // eslint-disable-next-line no-console
    console.log(
      `Server is running at http://${env.APP_HOST}:${env.APP_PORT} -- Author: ${env.AUTHOR}`
    )
  })
}

START_SERVER()
