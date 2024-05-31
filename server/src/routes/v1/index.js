import authRoutes from './authRoute'
import groupRoutes from './groupRoute'

const BASE_URL = '/api/v1'

const initRoutes = (app) => {
  app.use(`${BASE_URL}/auth`, authRoutes)
  app.use(`${BASE_URL}/group`, groupRoutes)
}

export default initRoutes
