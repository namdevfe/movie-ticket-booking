/* eslint-disable no-useless-catch */
import bcrypt from 'bcrypt'
import { StatusCodes } from 'http-status-codes'
import db from '~/models'
import ApiError from '~/utils/ApiError'
import { generateToken } from '~/utils/jwt'

const SALT_ROUNDS = 10

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(SALT_ROUNDS)
  const passwordHashed = bcrypt.hashSync(password, salt)
  return passwordHashed
}

const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash)
}

const register = async (data) => {
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

const login = async ({ email, password }) => {
  try {
    // STEP 1: Check user
    const user = await db.User.findOne({
      where: {
        email
      }
    })

    if (!user?.id)
      throw new ApiError(
        StatusCodes.UNAUTHORIZED,
        'Email is not exist. Please try again.'
      )

    // STEP 2: Check password
    const isPasswordChecked = comparePassword(password, user.password)
    if (!isPasswordChecked)
      throw new ApiError(
        StatusCodes.UNAUTHORIZED,
        'Email or password invalid. Please try again.'
      )

    // STEP 3: Generate accessToken if password passed
    const accessToken = generateToken(
      {
        userId: user.id,
        email: user.email,
        groupId: user.groupId
      },
      '5d'
    )

    return {
      accessToken: accessToken,
      refreshToken: 'refreshToken'
    }
  } catch (error) {
    throw error
  }
}

const authService = {
  register,
  login
}

export default authService
