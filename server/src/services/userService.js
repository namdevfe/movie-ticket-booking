import db from '~/models'

/* eslint-disable no-useless-catch */
const getProfile = async ({ userId }) => {
  try {
    const userInfo = await db.User.findByPk(userId, {
      attributes: {
        exclude: ['password']
      },
      include: [
        {
          model: db.Group
        }
      ],
      raw: true,
      nest: true
    })

    return userInfo
  } catch (error) {
    throw error
  }
}

const userService = {
  getProfile
}

export default userService
