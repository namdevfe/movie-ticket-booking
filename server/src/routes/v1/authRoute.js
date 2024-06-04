import express from 'express'
import authController from '~/controllers/authController'
import authValidation from '~/validations/authValidation'

const router = express.Router()

router.post('/register', authValidation.register, authController.register)
router.post('/login', authValidation.login, authController.login)

export default router
