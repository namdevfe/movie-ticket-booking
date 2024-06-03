import { StatusCodes } from 'http-status-codes'
import db from '~/models'
import ApiError from '~/utils/ApiError'

const createNewRole = async (data) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const [role, created] = await db.Role.findOrCreate({
      where: { url: data.url },
      defaults: data
    })

    if (!created)
      throw new ApiError(
        StatusCodes.UNPROCESSABLE_ENTITY,
        'Create new role failed.'
      )
    return role
  } catch (error) {
    throw error
  }
}

const roleService = {
  createNewRole
}

export default roleService
