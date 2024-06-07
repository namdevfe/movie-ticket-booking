import 'dotenv/config'

export const env = {
  AUTHOR: process.env.AUTHOR,
  APP_HOST: process.env.APP_HOST,
  APP_PORT: process.env.APP_PORT,
  DB_NAME: process.env.DB_NAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DIALECT: process.env.DB_DIALECT,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  BUILD_MODE: process.env.BUILD_MODE
}
