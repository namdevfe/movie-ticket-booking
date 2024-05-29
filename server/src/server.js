import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World, I\'m QuocNamDev<h1>')
})

const hostname = 'localhost'

const port = 8017

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`)
})
