import express from 'express'
import userController from '~/controllers/userController'

const router = express.Router()

router.get('/view', userController.getProfile)

export default router
