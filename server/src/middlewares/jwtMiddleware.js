import { StatusCodes } from 'http-status-codes'
import jwt, { TokenExpiredError } from 'jsonwebtoken'
import { env } from '~/config/environment'
import ApiError from '~/utils/ApiError'

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization
    if (!token)
      throw new ApiError(StatusCodes.UNAUTHORIZED, 'Token is required.')
    const accessToken = token.split(' ')[1]
    jwt.verify(accessToken, env.JWT_SECRET_KEY, (err, decode) => {
      if (err) {
        const isTokenExpired = err instanceof TokenExpiredError
        if (isTokenExpired) {
          throw new ApiError(StatusCodes.FORBIDDEN, 'Token is expired.')
        } else {
          throw new ApiError(StatusCodes.UNAUTHORIZED, 'Token invalid')
        }
      }

      req.user = decode
      next()
    })
  } catch (error) {
    next(error)
  }
}

export default verifyToken
