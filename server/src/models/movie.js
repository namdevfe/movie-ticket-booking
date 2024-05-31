'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
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
  Movie.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      duration: DataTypes.STRING,
      rate: DataTypes.FLOAT,
      nation: DataTypes.STRING,
      producer: DataTypes.STRING,
      director: DataTypes.TEXT,
      cast: DataTypes.TEXT,
      poster: DataTypes.STRING,
      trailer: DataTypes.STRING,
      releaseDate: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'Movie'
    }
  )
  return Movie
}
