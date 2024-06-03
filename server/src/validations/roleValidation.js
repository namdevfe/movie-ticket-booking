import { StatusCodes } from 'http-status-codes'
import Joi from 'joi'
import ApiError from '~/utils/ApiError'

const createNewRole = async (req, res, next) => {
  const schema = Joi.object({
    url: Joi.string().required().min(6).max(50).trim().strict(),
    description: Joi.string().required().min(3).max(255).trim().strict()
  })

  try {
    await schema.validateAsync(req.body, { abortEarly: false })
    next()
  } catch (error) {
    const customError = new ApiError(
      StatusCodes.UNPROCESSABLE_ENTITY,
      new Error(error).message
    )
    next(customError)
  }
}

const roleValidation = {
  createNewRole
}

export default roleValidation
