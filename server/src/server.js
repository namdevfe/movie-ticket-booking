import express from 'express'
import { env } from './config/environment'

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World, I\'m QuocNamDev<h1>')
})

app.listen(env.APP_PORT, env.APP_HOST, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at http://${env.APP_HOST}:${env.APP_PORT} -- Author: ${env.AUTHOR}`)
})
