'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      totalPrice: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      totalSeat: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cinemaMovieId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'CinemaMovies',
          key: 'id'
        }
      },
      showTimeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ShowTimes',
          key: 'id'
        }
      },
      screenId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Screens',
          key: 'id'
        }
      },
      seatId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Seats',
          key: 'id'
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
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
    await queryInterface.dropTable('Bookings')
  }
}
