/* eslint-disable no-useless-catch */
import db from '~/models'
import { LIMIT_USERS } from '~/utils/constants'

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

const userService = {
  getProfile,
  getUsers
}

export default userService
