import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'
import { BASE_URL_API_V1, PUBLIC_PATH } from '~/utils/constants'

const verifyPermission = (req, res, next) => {
  try {
    if (PUBLIC_PATH.includes(req.path.split(BASE_URL_API_V1)?.[1]))
      return next()

    const group = req.user.group

    if (
      !group ||
      !group?.length === 0 ||
      !group.roles.some(
        (role) => role?.url === req.path.split(BASE_URL_API_V1)?.[1]
      )
    )
      throw new ApiError(StatusCodes.FORBIDDEN, 'Permission denined')

    next()
  } catch (error) {
    next(error)
  }
}

export default verifyPermission
