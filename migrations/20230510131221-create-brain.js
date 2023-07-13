'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Brains', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userid: {
        type: Sequelize.INTEGER
      },
      personname: {
        type: Sequelize.STRING
      },
      businessname: {
        type: Sequelize.STRING
      },
      phonenumber: {
        type: Sequelize.STRING
      },
      emailaddress: {
        type: Sequelize.STRING
      },
      facebookid: {
        type: Sequelize.STRING
      },
      instagramid: {
        type: Sequelize.STRING
      },
      twitterid: {
        type: Sequelize.STRING
      },
      linkedinid: {
        type: Sequelize.STRING
      },
      otherid: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      ledbulbs: {
        type: Sequelize.BOOLEAN
      },
      highwattagehammerbulbs: {
        type: Sequelize.BOOLEAN
      },
      panellights: {
        type: Sequelize.BOOLEAN
      },
      emergencyinverterbulbs: {
        type: Sequelize.BOOLEAN
      },
      streetandfloodlights: {
        type: Sequelize.BOOLEAN
      },
      smartlightning: {
        type: Sequelize.BOOLEAN
      },
      solarproducts: {
        type: Sequelize.BOOLEAN
      },
      specialproducts: {
        type: Sequelize.BOOLEAN
      },
      electricalaccessories: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Brains');
  }
};