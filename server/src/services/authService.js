import { StatusCodes } from 'http-status-codes'
import db from '~/models'
import ApiError from '~/utils/ApiError'
import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(SALT_ROUNDS)
  const passwordHashed = bcrypt.hashSync(password, salt)
  return passwordHashed
}

const register = async (data) => {
  // eslint-disable-next-line no-useless-catch
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
    const [user, created] = await db.User.findOrCreate({
      where: {
        email: data.email
      },
      defaults: {
        ...data,
        password: hashPassword(data.password),
        groupId: 2
      }
    })

    if (!created)
      throw new ApiError(
        StatusCodes.UNPROCESSABLE_ENTITY,
        'Email already exist. Please try register again.'
      )
    return user
  } catch (error) {
    throw error
  }
}

const authService = {
  register
}

export default authService
