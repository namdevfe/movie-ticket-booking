'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class ShowTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  ShowTime.init(
    {
      startTime: DataTypes.DATE,
      screenId: DataTypes.INTEGER,
      movieId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'ShowTime'
    }
  )
  return ShowTime
}
