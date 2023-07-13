'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Notifications', [
      {
        userid: 1000,
        title: "Welcome!!",
        description: "You are FieldMan.",
        imagelink: "https://images.livemint.com/img/2023/01/17/1600x900/Prime-Minister-Narendra-Modi---Hindustan-Times---D_1673854873197_1673976961802_1673976961802.jpg",
        state: "Assam",
        markAsReadClicked: "false",
        taskDoneClicked: "false",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userid: 1000,
        title: "Supervisor has uploaded tasks",
        description: "Do your tasks on time",
        imagelink: "https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif",
        state: "Assam",
        markAsReadClicked: "false",
        taskDoneClicked: "false",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userid: 1000,
        title: "New Schemes",
        description: "Continuously check scheme section for new schemes. Schemes updated daily.",
        imagelink: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202204/modi-ji_0-sixteen_nine.jpg?size=948:533",
        state: "Assam",
        markAsReadClicked: "false",
        taskDoneClicked: "false",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Notifications', null, {});
  }
};
