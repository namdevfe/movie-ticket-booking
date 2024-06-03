import { StatusCodes } from 'http-status-codes'
import roleService from '~/services/roleService'

// CREATE A NEW ROLE
const createNewRole = async (req, res, next) => {
  try {
    const roleRes = await roleService.createNewRole(req.body)

    return res.status(StatusCodes.CREATED).json({
      statusCode: StatusCodes.CREATED,
      message: 'Created new role is successfully',
      data: roleRes
    })
  } catch (error) {
    next(error)
  }
}

const roleController = {
  createNewRole
}

export default roleController
