import express from 'express'
import roleController from '~/controllers/roleController'
import roleValidation from '~/validations/roleValidation'

const router = express.Router()

// CREATE ROLE
router.post(
  '/create',
  roleValidation.createNewRole,
  roleController.createNewRole
)

export default router
