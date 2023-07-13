'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Leads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // leadid: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      leadCategory: {
        // allowNull: false,
        type: Sequelize.STRING(20)
      },
      leadEmail: {
        // allowNull: false,
        type: Sequelize.STRING(50)
      },
      leadPhoneNumber: {
        // allowNull: false,
        type: Sequelize.STRING(20)
      },
      leadBusinessName: {
        // allowNull: false,
        type: Sequelize.STRING
      },
      leadContactPerson: {
        // allowNull: false,
        type: Sequelize.STRING(100)
      },
      leadDesignation: {
        // allowNull: false,
        type: Sequelize.STRING
      },
      leadAddress: {
        // allowNull: false,
        type: Sequelize.STRING
      },
      leadCity: {
        // allowNull: false,
        type: Sequelize.STRING(50)
      },
      leadState: {
        // allowNull: false,
        type: Sequelize.STRING(20)
      },
      leadPincode: {
        // allowNull: false,
        type: Sequelize.STRING(6)
      },
      leadNotes: {
        // allowNull: false,
        type: Sequelize.STRING
      },
      leadSubmitDate: {
        // allowNull: false,
        type: Sequelize.STRING(20)
      },
      leadSubmitTime: {
        // allowNull: false,
        type: Sequelize.STRING(20)
      },
      leadsBy: {
        // allowNull: false,
        type: Sequelize.INTEGER
      },
    //   leadDateAndTime: {
    //     // allowNull: false,
    //     type: Sequelize.STRING(20)
    //   },
      leadOwner: {
        // allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Leads');
  }
};