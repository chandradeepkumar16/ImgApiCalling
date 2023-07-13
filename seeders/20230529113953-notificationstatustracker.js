'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('NotificationStatusTrackings', [
      {
        userid: 1000,
        notificationid: 1,
        clicked: "false",
        seen: "false",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userid: 1000,
        notificationid: 2,
        clicked: "false",
        seen: "false",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userid: 1000,
        notificationid: 3,
        clicked: "false",
        seen: "false",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('NotificationStatusTrackings', null, {});
  }
};
