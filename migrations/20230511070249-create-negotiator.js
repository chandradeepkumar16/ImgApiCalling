'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Negotiators', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userid: {
        type: Sequelize.INTEGER
      },
      productname: {
        type: Sequelize.STRING
      },
      boxquantity: {
        type: Sequelize.STRING
      },
      recurring: {
        type: Sequelize.STRING
      },
      recurringDays: {
        type: Sequelize.STRING
      },
      leadrank: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      totalpieces: {
        type: Sequelize.STRING
      },
      totalorderplaced: {
        type: Sequelize.STRING
      },
      checkvd: {
        type: Sequelize.STRING
      },
      checkcd: {
        type: Sequelize.STRING
      },
      volumediscount: {
        type: Sequelize.STRING
      },
      totalaftervd: {
        type: Sequelize.STRING
      },
      cashpayment: {
        type: Sequelize.STRING
      },
      cashdiscount: {
        type: Sequelize.STRING
      },
      finalamount: {
        type: Sequelize.STRING
      },
      invoicelink: {
        type: Sequelize.STRING
      },
      businessname: {
        type: Sequelize.STRING
      },
      personname: {
        type: Sequelize.STRING
      },
      phonenumber: {
        type: Sequelize.STRING
      },
      emailaddress: {
        type: Sequelize.STRING
      },
      pincode: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      mrp: {
        type: Sequelize.STRING
      },
      rp: {
        type: Sequelize.STRING
      },
      totalBeforeDiscount: {
        type: Sequelize.STRING
      },
      totalAfterCashDiscount: {
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
    await queryInterface.dropTable('Negotiators');
  }
};