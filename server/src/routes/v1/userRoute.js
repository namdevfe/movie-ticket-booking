import express from 'express'
import userController from '~/controllers/userController'

const router = express.Router()

router.get('/view', userController.getProfile)
router.get('/view-all', userController.getUsers)

export default router
