import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World, I\'m QuocNamDev Testasasa<h1>')
})

const hostname = 'localhost'

const port = 8017

app.listen(port, hostname, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at http://${hostname}:${port}`)
})
