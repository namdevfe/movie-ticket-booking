import express from 'express'
import { env } from './config/environment'
import connectDB from './config/connectDB'

const app = express()

connectDB()

app.get('/', (req, res) => {
  res.send(`Hi I am ${env.AUTHOR}`)
})

app.listen(env.APP_PORT, env.APP_HOST, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Server is running at http://${env.APP_HOST}:${env.APP_PORT} -- Author: ${env.AUTHOR}`
  )
})
