import jwt from 'jsonwebtoken'
import { env } from '~/config/environment'

export const generateToken = (data, expireTime) => {
  const accessToken = jwt.sign(data, env.JWT_SECRET_KEY, {
    expiresIn: expireTime
  })

  return accessToken
}
