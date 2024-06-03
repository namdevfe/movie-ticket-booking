import authRoutes from './authRoute'
import groupRoutes from './groupRoute'
import roleRoutes from './roleRoute'

const BASE_URL = '/api/v1'

const initRoutes = (app) => {
  app.use(`${BASE_URL}/auth`, authRoutes)
  app.use(`${BASE_URL}/group`, groupRoutes)
  app.use(`${BASE_URL}/role`, roleRoutes)
}

export default initRoutes
