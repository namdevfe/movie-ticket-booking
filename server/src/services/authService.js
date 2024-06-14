/* eslint-disable no-useless-catch */
import bcrypt from 'bcrypt'
import { StatusCodes } from 'http-status-codes'
import { env } from '~/config/environment'
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

    // Find roles base on groupId
    const group = await db.Group.findOne({
      where: {
        id: user.groupId
      },
      include: [
        {
          model: db.Role,
          attributes: ['id', 'url', 'description'],
          as: 'roles',
          through: { attributes: [] }
        }
      ]
    })

    // STEP 3: Generate accessToken & refreshToken if password passed
    const accessToken = generateToken(
      {
        userId: user.id,
        email: user.email,
        group
      },
      env.JWT_SECRET_ACCESS_TOKEN_KEY,
      '5s'
    )

    const refreshToken = generateToken(
      {
        userId: user.id
      },
      env.JWT_SECRET_REFRESH_TOKEN_KEY,
      '30d'
    )

    // Update refreshToken field in db
    if (refreshToken) {
      await db.User.update(
        {
          refreshToken
        },
        {
          where: { id: user.id }
        }
      )
    }

    return {
      accessToken: accessToken,
      refreshToken: refreshToken
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
