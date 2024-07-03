import express from 'express'
import userController from '~/controllers/userController'
import authValidation from '~/validations/authValidation'
import userValidation from '~/validations/userValidation'

const router = express.Router()

router.get('/view', userController.getProfile)
router.get('/view-all', userController.getUsers)
router.post('/add', authValidation.register, userController.createUser)
router.delete('/delete', userValidation.deleteUser, userController.deleteUser)

export default router
