import express from 'express'
import userController from '~/controllers/userController'
import verifyToken from '~/middlewares/jwtMiddleware'

const router = express.Router()

router.get('/profile/view', verifyToken, userController.getProfile)

export default router
