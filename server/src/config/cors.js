import { StatusCodes } from 'http-status-codes'
import { env } from '~/config/environment'
import ApiError from '~/utils/ApiError'
import { WHITELIST_DOMAINS } from '~/utils/constants'

export const corsOptions = {
  origin: (origin, callback) => {
    // Allow with dev mode
    if (!origin && env.BUILD_MODE === 'dev') {
      return callback(null, true)
    }

    // Check whitelist domains
    if (WHITELIST_DOMAINS.includes(origin)) {
      return callback(null, true)
    }

    // Throw error if domain invalid
    return callback(
      new ApiError(
        StatusCodes.FORBIDDEN,
        `${origin} not allowed by our CORS Policy.`
      )
    )
  },

  // Some legacy browsers (IE11, various SmartTVs) choke on 204
  optionsSuccessStatus: 200,

  credentials: true
}
