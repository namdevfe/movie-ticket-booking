import { StatusCodes } from 'http-status-codes'
import groupService from '~/services/groupService'

const createNewGroup = async (req, res, next) => {
  try {
    const groupRes = await groupService.createNew(req.body)
    return res.status(StatusCodes.CREATED).json({
      statusCode: StatusCodes.CREATED,
      message: 'Created new group is successfully',
      data: groupRes
    })
  } catch (error) {
    next(error)
  }
}

const groupController = {
  createNewGroup
}

export default groupController
