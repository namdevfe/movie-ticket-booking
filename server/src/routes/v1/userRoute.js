import express from 'express'
import userController from '~/controllers/userController'
import authValidation from '~/validations/authValidation'

const router = express.Router()

router.get('/view', userController.getProfile)
router.get('/view-all', userController.getUsers)
router.post('/add', authValidation.register, userController.createUser)

export default router
