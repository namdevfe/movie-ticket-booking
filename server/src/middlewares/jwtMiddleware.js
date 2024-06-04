import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
  const accessToken = req.headers.authorization
  console.log('🚀accessToken---->', accessToken)
}
