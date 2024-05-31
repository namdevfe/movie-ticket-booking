'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Screens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      cinemaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Cinemas',
          key: 'id'
        }
      },
      projectionTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ProjectionTypes',
          key: 'id'
        }
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
    await queryInterface.dropTable('Screens')
  }
}
