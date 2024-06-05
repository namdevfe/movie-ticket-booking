import express from 'express'
import groupController from '~/controllers/groupController'
import groupValidation from '~/validations/groupValidation'

const router = express.Router()

router.post(
  '/create',
  groupValidation.createNew,
  groupController.createNewGroup
)

export default router
