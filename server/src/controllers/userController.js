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

const createUser = async (req, res, next) => {
  try {
    await userService.createUser(req.body)
    return res.status(StatusCodes.CREATED).json({
      statusCode: StatusCodes.CREATED,
      message: 'Created new user is successfully'
    })
  } catch (error) {
    next(error)
  }
}

const deleteUser = async (req, res, next) => {
  const userId = req.body.userId
  try {
    const deletedUser = await userService.deleteUser(userId)
    if (deletedUser) {
      return res.status(StatusCodes.OK).json({
        statusCode: StatusCodes.OK,
        message: `Deleted userId = ${userId} is successfully`
      })
    }
  } catch (error) {
    next(error)
  }
}

const userController = {
  getProfile,
  getUsers,
  createUser,
  deleteUser
}

export default userController
