'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactionConsignments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderid: {
        type: Sequelize.STRING
      },
      orderdate: {
        type: Sequelize.STRING
      },
      orderamount: {
        type: Sequelize.STRING
      },
      consigneename: {
        type: Sequelize.STRING
      },
      origincity: {
        type: Sequelize.STRING
      },
      destinationcity: {
        type: Sequelize.STRING
      },
      destinationstate: {
        type: Sequelize.STRING
      },
      sentby: {
        type: Sequelize.STRING
      },
      orderdetails: {
        type: Sequelize.STRING
      },
      currentstatus: {
        type: Sequelize.STRING
      },
      shipperdetails: {
        type: Sequelize.STRING
      },
      notes: {
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
    await queryInterface.dropTable('transactionConsignments');
  }
};