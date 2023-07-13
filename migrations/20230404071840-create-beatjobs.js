'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Beatjobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // beatid: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      userId: {
        // allowNull: false,
        // defaultValue: 1000,
        type: Sequelize.INTEGER
      },
      beatDate: {
        // allowNull: false,
        type: Sequelize.STRING(20)
      },
      beatTime: {
        // allowNull: false,
        type: Sequelize.STRING(20)
      },
      beatContactPerson: {
        // allowNull: false,
        type: Sequelize.STRING(100)
      },
      beatBusinessName: {
        // allowNull: false,
        type: Sequelize.STRING
      },
      beatPriority: {
        // allowNull: false,
        type: Sequelize.STRING(20)
      },
      beatPhoneNumber: {
        // allowNull: false,
        type: Sequelize.STRING(20)
      },
      beatAddress: {
        // allowNull: false,
        type: Sequelize.STRING
      },
      beatCity: {
        // allowNull: false,
        type: Sequelize.STRING(50)
      },
      beatState: {
        // allowNull: false,
        type: Sequelize.STRING(20)
      },
      beatFollowUp: {
        // allowNull: false,
        type: Sequelize.STRING(20)
      },
      beatXY: {
        // allowNull: false,
        type: Sequelize.STRING(50)
      },
      beatTodo: {
        // allowNull: false,
        type: Sequelize.STRING
      },
      beatNotes: {
        // allowNull: false,
        type: Sequelize.STRING
      },
      beatAssigned: {
        // allowNull: false,
        type: Sequelize.INTEGER
      },
      beatDateAndTime: {
        // allowNull: false,
        type: Sequelize.STRING(20)
      },
      beatlastaction: {
          type: Sequelize.STRING
      },
      // stampedon: {
      //   allowNull: false,
      //   type: Sequelize.DATE,
      //   defaultValue:Sequelize.NOW
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
    await queryInterface.dropTable('Beatjobs');
  }
};