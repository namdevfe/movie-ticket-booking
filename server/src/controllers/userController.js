import { StatusCodes } from 'http-status-codes'
import userService from '~/services/userService'

const getProfile = async (req, res, next) => {
  try {
    const profile = await userService.getProfile(req.user)
    return res.status(StatusCodes.OK).json({
      statusCode: StatusCodes.OK,
      message: StatusCodes[StatusCodes.OK],
      data: profile
    })
  } catch (error) {
    next(error)
  }
}

const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getUsers(req.query)
    return res.status(StatusCodes.OK).json({
      statusCode: StatusCodes.OK,
      message: StatusCodes[StatusCodes.OK],
      data: users
    })
  } catch (error) {
    next(error)
  }
}

const userController = {
  getProfile,
  getUsers
}

export default userController
