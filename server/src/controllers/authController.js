import { StatusCodes } from 'http-status-codes'
import authService from '~/services/authService'

const register = async (req, res, next) => {
  try {
    await authService.register(req.body)
    return res.status(StatusCodes.CREATED).json({
      statusCode: StatusCodes.CREATED,
      message: 'Created new user is successfully'
    })
  } catch (error) {
    next(error)
  }
}

const login = async (req, res, next) => {
  try {
    const userData = await authService.login(req.body)
    return res.status(StatusCodes.OK).json({
      statusCode: StatusCodes.OK,
      message: 'Login is successfully',
      data: userData
    })
  } catch (error) {
    next(error)
  }
}

const refreshToken = async (req, res, next) => {
  const { refreshToken } = req.body

  try {
    const response = await authService.refreshToken(refreshToken)

    return res.status(StatusCodes.OK).json({
      statusCode: StatusCodes.OK,
      message: 'OK',
      data: response
    })
  } catch (error) {
    next(error)
  }
}

const authController = {
  register,
  login,
  refreshToken
}

export default authController
