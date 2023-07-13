'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BeatjobsTransactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      beatPriority: {
        type: Sequelize.STRING(20)
      },
      beatTodo: {
        type: Sequelize.STRING
      },
      beatNotes: {
        type: Sequelize.STRING
      },
      beatFollowUp: {
        type: Sequelize.STRING(20)
      },
      beatId: {
        type: Sequelize.INTEGER
      },
      beatlastaction: {
          type: Sequelize.STRING
      },
      beatXY: {
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
    await queryInterface.dropTable('BeatjobsTransactions');
  }
};