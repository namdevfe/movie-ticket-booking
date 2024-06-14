import jwt from 'jsonwebtoken'

export const generateToken = (data, secretKey, expireTime) => {
  const token = jwt.sign(data, secretKey, {
    expiresIn: expireTime
  })

  return token
}
