import verifyToken from '~/middlewares/jwtMiddleware'
import authRoutes from './authRoute'
import groupRoutes from './groupRoute'
import roleRoutes from './roleRoute'
import userRoutes from './userRoute'
import { BASE_URL_API_V1 } from '~/utils/constants'
import verifyPermission from '~/middlewares/verifyPermission'

const initRoutes = (app) => {
  // Check all routes exclude public routes
  app.all('*', verifyToken, verifyPermission)

  app.use(`${BASE_URL_API_V1}/auth`, authRoutes)
  app.use(`${BASE_URL_API_V1}/group`, groupRoutes)
  app.use(`${BASE_URL_API_V1}/role`, roleRoutes)
  app.use(`${BASE_URL_API_V1}/user`, userRoutes)
}

export default initRoutes
