'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      duration: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rate: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      nation: {
        type: Sequelize.STRING,
        allowNull: false
      },
      producer: {
        type: Sequelize.STRING
      },
      director: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      cast: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      poster: {
        type: Sequelize.STRING,
        allowNull: false
      },
      trailer: {
        type: Sequelize.STRING,
        allowNull: false
      },
      releaseDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Movies')
  }
}
