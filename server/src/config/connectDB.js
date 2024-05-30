/* eslint-disable no-console */

import Sequelize from 'sequelize'
import { env } from './environment'

const sequelize = new Sequelize(env.DB_NAME, env.DB_USERNAME, env.DB_PASSWORD, {
  host: env.APP_HOST,
  dialect: env.DB_DIALECT,
  logging: false
})

const connectDB = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

export default connectDB
