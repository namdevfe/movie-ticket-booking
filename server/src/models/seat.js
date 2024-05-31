'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
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
  Seat.init(
    {
      row: DataTypes.INTEGER,
      column: DataTypes.INTEGER,
      seatType: {
        type: DataTypes.ENUM,
        values: ['AVAILABLE', 'UNAVAILABLE']
      },
      price: DataTypes.FLOAT,
      status: {
        type: DataTypes.ENUM,
        values: ['NORMAL', 'VIP']
      },
      screenId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Seat'
    }
  )
  return Seat
}
