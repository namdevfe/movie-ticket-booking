'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Screen extends Model {
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
  Screen.init(
    {
      number: DataTypes.INTEGER,
      cinemaId: DataTypes.INTEGER,
      projectionTypeId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Screen'
    }
  )
  return Screen
}
