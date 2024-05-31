import { StatusCodes } from 'http-status-codes'
import Joi from 'joi'
import ApiError from '~/utils/ApiError'

const createNew = async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required().min(3).max(50).trim().strict(),
    description: Joi.string().required().min(3).max(255).trim().strict()
  })

  try {
    await schema.validateAsync(req.body, { abortEarly: false })
    next()
  } catch (error) {
    const statusCode = StatusCodes.UNPROCESSABLE_ENTITY
    const errorMessage = new Error(error).message
    const customError = new ApiError(statusCode, errorMessage)
    next(customError)
  }
}

const groupValidation = {
  createNew
}

export default groupValidation
