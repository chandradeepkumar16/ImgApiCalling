'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SalesData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      salesid: {
        // allowNull: false,
        // autoIncrement: true,
        // primaryKey: true,
        type: Sequelize.INTEGER
      },
      userid: {
        // allowNull: false,
        type: Sequelize.INTEGER
      },
      productcode: {
        // allowNull: false,
        type: Sequelize.STRING(50)
      },
      salesunits: {
        // allowNull: false,
        type: Sequelize.INTEGER
      },
      salesamount: {
        // allowNull: false,
        type: Sequelize.INTEGER
      },
      salesmonth: {
        // allowNull: false,
        type: Sequelize.STRING(50)
      },
      salesdate: {
        // allowNull: false,
        type: Sequelize.DATEONLY
      },
      salesyear: {
        // allowNull: false,
        type: Sequelize.INTEGER
      },
      salescode: {
        // allowNull: false,
        type: Sequelize.INTEGER
      },
      salesmode: {
        // allowNull: false,
        type: Sequelize.INTEGER
      },
      // stampedon: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
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
    await queryInterface.dropTable('SalesData');
  }
};