'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Schemes', [
      {
        type: "retailer",
        state: "Assam",
        skuid: "dhy3456",
        productname: "Alpha Bulb",
        schemedetails: "10% Discount",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "dealer",
        state: "Assam",
        skuid: "dhy3456",
        productname: "Beta Bulb",
        schemedetails: "20% Discount",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "dealer",
        state: "Assam",
        skuid: "dhhwer42",
        productname: "Tubelight",
        schemedetails: "15% Discount",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Schemes', null, {});
  }
};
