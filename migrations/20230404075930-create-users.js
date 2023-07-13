'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userid: {
        // allowNull: false,
        type: Sequelize.INTEGER
      },
      fname: {
        // allowNull: false,
        type: Sequelize.STRING(100)
      },
      lname: {
        // allowNull: false,
        type: Sequelize.STRING(100)
      },
      userpwd: {
        // allowNull: false,
        type: Sequelize.STRING(100)
      },
      useremail: {
        // allowNull: false,
        type: Sequelize.STRING(100)
      },
      userpic: {
        // allowNull: false,
        type: Sequelize.STRING
      },
      userstate: {
        // allowNull: false,
        type: Sequelize.STRING(100)
      },
      usercity: {
        // allowNull: false,
        type: Sequelize.STRING(100)
      },
      userregion: {
        // allowNull: false,
        type: Sequelize.STRING(100)
      },
      mgruserid: {
        // allowNull: false,
        type: Sequelize.INTEGER
      },
      usercategory: {
        // allowNull: false,
        type: Sequelize.INTEGER
      },
      usertarget: {
        // allowNull: false,
        type: Sequelize.INTEGER
      },
      usersales: {
        // allowNull: false,
        type: Sequelize.INTEGER
      },
      userrank: {
        // allowNull: false,
        type: Sequelize.INTEGER
      },
      userstatus: {
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
    await queryInterface.dropTable('Users');
  }
};