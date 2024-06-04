import { StatusCodes } from 'http-status-codes'
import Joi from 'joi'
import ApiError from '~/utils/ApiError'

const register = async (req, res, next) => {
  const scheme = Joi.object({
    email: Joi.string()
      .required()
      .email({
        minDomainSegments: 2,
        tlds: {
          allow: ['com']
        }
      })
      .trim()
      .strict(),
    password: Joi.string().required().min(6).max(30).trim().strict(),
    username: Joi.string().required().min(3).max(50).trim().strict(),
    groupId: Joi.number()
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

const authValidation = {
  register
}

export default authValidation
