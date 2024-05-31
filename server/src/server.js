import express from 'express'
import { env } from './config/environment'
import connectDB from './config/connectDB'
import initRoutes from './routes/v1'
import { errorHandlingMiddleware } from '~/middlewares/errorHandlingMiddleware'

const START_SERVER = () => {
  const app = express()

  app.use(express.json())

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
