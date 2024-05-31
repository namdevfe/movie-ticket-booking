'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Cinema extends Model {
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
  Cinema.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.TEXT,
      latitude: DataTypes.FLOAT,
      longtitude: DataTypes.FLOAT
    },
    {
      sequelize,
      modelName: 'Cinema'
    }
  )
  return Cinema
}
