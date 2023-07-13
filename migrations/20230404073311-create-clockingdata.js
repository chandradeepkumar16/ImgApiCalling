'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ClockingData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // clockid: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      userid: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      activitytype: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      // stampedon: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      clockdate: {
        allowNull: false,
        type: Sequelize.STRING
      },
      clocktime: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ClockingData');
  }
};