'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
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
  Booking.init(
    {
      totalPrice: DataTypes.FLOAT,
      totalSeat: DataTypes.INTEGER,
      cinemaMovieId: DataTypes.INTEGER,
      showTimeId: DataTypes.INTEGER,
      screenId: DataTypes.INTEGER,
      seatId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Booking'
    }
  )
  return Booking
}
