import { StatusCodes } from 'http-status-codes'
import db from '~/models'
import ApiError from '~/utils/ApiError'

const createNew = async ({ name, description }) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const [group, created] = await db.Group.findOrCreate({
      where: {
        name
      },
      defaults: {
        name,
        description
      }
    })

    if (!created)
      throw new ApiError(
        StatusCodes.UNPROCESSABLE_ENTITY,
        'Create new group user failed.'
      )
    return group
  } catch (error) {
    throw error
  }
}

const groupService = {
  createNew
}

export default groupService
