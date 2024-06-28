/* eslint-disable no-useless-catch */
import { StatusCodes } from 'http-status-codes'
import db from '~/models'
import ApiError from '~/utils/ApiError'
import { LIMIT_USERS } from '~/utils/constants'
import { hashPassword } from '~/utils/password'

// Get profile
const getProfile = async ({ userId }) => {
  try {
    const userInfo = await db.User.findByPk(userId, {
      attributes: {
        exclude: ['password', 'refreshToken']
      },
      include: [
        {
          model: db.Group,
          as: 'group',
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          }
        }
      ],
      raw: true,
      nest: true
    })

    return userInfo
  } catch (error) {
    throw error
  }
}

// ADMIN FEATURES
// Get all users
const getUsers = async (query) => {
  const queries = {
    attributes: {
      exclude: ['password', 'refreshToken']
    }
  }

  // Paging
  const { page, limit } = query || {}

  queries.offset = !page || Number(page) <= 1 ? 0 : (Number(page) - 1) * limit
  queries.limit = Number(limit) || LIMIT_USERS

  try {
    const { count, rows } = await db.User.findAndCountAll({
      ...queries,
      raw: true,
      nest: true
    })

    return {
      count,
      users: [...rows]
    }
  } catch (error) {
    throw error
  }
}

// Add new user
const createUser = async (data) => {
  try {
    // Create user with admin group
    if (data?.groupId) {
      const [user, created] = await db.User.findOrCreate({
        where: {
          email: data.email
        },
        defaults: {
          ...data,
          password: hashPassword(data.password)
        }
      })

      if (!created)
        throw new ApiError(
          StatusCodes.UNPROCESSABLE_ENTITY,
          'Email already exist. Please try register again.'
        )
      return user
    }

    // Create user with default is user group
    const [user, userCreated] = await db.User.findOrCreate({
      where: {
        email: data.email
      },
      defaults: {
        ...data,
        password: hashPassword(data.password),
        groupId: 2
      }
    })

    if (!userCreated)
      throw new ApiError(
        StatusCodes.UNPROCESSABLE_ENTITY,
        'Email already exist. Please try register again.'
      )

    return user
  } catch (error) {
    throw error
  }
}

const userService = {
  getProfile,
  getUsers,
  createUser
}

export default userService
