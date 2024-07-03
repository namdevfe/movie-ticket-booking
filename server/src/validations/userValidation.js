import { StatusCodes } from 'http-status-codes'
import Joi from 'joi'
import ApiError from '~/utils/ApiError'

const deleteUser = async (req, res, next) => {
  const scheme = Joi.object({
    userId: Joi.number().required()
  })
  try {
    await scheme.validateAsync(req.body, { abortEarly: false })
    next()
  } catch (error) {
    const customError = new ApiError(
      StatusCodes.UNPROCESSABLE_ENTITY,
      new Error(error).message
    )
    next(customError)
  }
}

const userValidation = {
  deleteUser
}

export default userValidation
