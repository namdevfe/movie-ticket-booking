'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      row: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      column: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      seatType: {
        type: Sequelize.ENUM,
        values: ['NORMAL', 'VIP']
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM,
        values: ['AVAILABLE', 'UNAVAILABLE']
      },
      screenId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Screens',
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
    await queryInterface.dropTable('Seats')
  }
}
