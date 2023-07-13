'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LocationData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // locationid: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      userid: {
        // allowNull: false,
        type: Sequelize.INTEGER
      },
      latitude: {
        // allowNull: false,
        type: Sequelize.STRING(50)
      },
      longitude: {
        // allowNull: false,
        type: Sequelize.STRING(50)
      },
      // stampedon: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      stampdate: {
        // allowNull: false,
        type: Sequelize.STRING
      },
      stamptime: {
        // allowNull: false,
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
    await queryInterface.dropTable('LocationData');
  }
};