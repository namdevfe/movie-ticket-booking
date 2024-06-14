import { StatusCodes } from 'http-status-codes'
import jwt, { TokenExpiredError } from 'jsonwebtoken'
import { env } from '~/config/environment'
import ApiError from '~/utils/ApiError'
import { BASE_URL_API_V1, PUBLIC_PATH } from '~/utils/constants'

const verifyToken = (req, res, next) => {
  try {
    if (PUBLIC_PATH.includes(req.path.split(BASE_URL_API_V1)?.[1]))
      return next()

    const token = req.headers.authorization
    if (!token)
      throw new ApiError(StatusCodes.UNAUTHORIZED, 'Token is required.')
    const accessToken = token.split(' ')[1]
    jwt.verify(accessToken, env.JWT_SECRET_ACCESS_TOKEN_KEY, (err, decode) => {
      if (err) {
        const isTokenExpired = err instanceof TokenExpiredError
        if (isTokenExpired) {
          throw new ApiError(StatusCodes.UNAUTHORIZED, 'Token is expired.')
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
