'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
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
  Genre.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'Genre'
    }
  )
  return Genre
}
