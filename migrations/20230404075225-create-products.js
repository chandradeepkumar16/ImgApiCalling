'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productid: {
        // allowNull: false,
        // autoIncrement: true,
        // primaryKey: true,
        type: Sequelize.INTEGER
      },
      productsku: {
        // allowNull: false,
        type: Sequelize.STRING(50)
      },
      productcode: {
        // allowNull: false,
        type: Sequelize.STRING(50)
      },
      productname: {
        // allowNull: false,
        type: Sequelize.STRING
      },
      productcategory: {
        // allowNull: false,
        type: Sequelize.STRING(100)
      },
      productimage: {
        // allowNull: false,
        type: Sequelize.STRING
      },
      sourcedfrom: {
        // allowNull: false,
        type: Sequelize.STRING(100)
      },
      productioncost: {
        // allowNull: false,
        type: Sequelize.FLOAT
      },
      productmrp: {
        // allowNull: false,
        type: Sequelize.FLOAT
      },
      productrsp: {
        // allowNull: false,
        type: Sequelize.FLOAT
      },
      productrp: {
        // allowNull: false,
        type: Sequelize.FLOAT
      },
      productdp: {
        // allowNull: false,
        type: Sequelize.FLOAT
      },
      productsp: {
        // allowNull: false,
        type: Sequelize.INTEGER
      },
      productcsp: {
        // allowNull: false,
        type: Sequelize.FLOAT
      },
      productpkcost: {
        // allowNull: false,
        type: Sequelize.FLOAT
      },
      productpack: {
        // allowNull: false,
        type: Sequelize.FLOAT
      },
      producttranscost: {
        // allowNull: false,
        type: Sequelize.FLOAT
      },
      coloravail: {
        // allowNull: false,
        type: Sequelize.STRING
      },
      lumenavail: {
        // allowNull: false,
        type: Sequelize.STRING
      },
      bestseller: {
        // allowNull: false,
        type: Sequelize.INTEGER
      },
      launchdate: {
        // allowNull: false,
        type: Sequelize.DATEONLY
      },
      productrank: {
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
    await queryInterface.dropTable('Products');
  }
};