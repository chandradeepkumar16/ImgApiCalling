'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Notifications', [
      {
        id: 1,
        orderid: "100000310",
        orderdate: "7/3/23",
        orderamount: "Rs 250000",
        consigneename: "Aman",
        origincity: "Ghaziabad",
        destinationcity: "Gurugram",
        sentby: "Ranesh",
        orderdetails: "ship it carefully",
        currentstatus: "doing",
        shipperdetails: "sending items",
        notes: "hey there it is notes",
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Consignments', null, {});

  }
};
