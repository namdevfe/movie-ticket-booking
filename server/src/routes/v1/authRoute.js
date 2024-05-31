import express from 'express'

const router = express.Router()

router.post('/register', (req, res) => {
  return res.json({
    message: 'API REGISTER is ready to use.'
  })
})

export default router
