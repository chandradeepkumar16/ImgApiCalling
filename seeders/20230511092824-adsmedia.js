'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('AdsMedia', [
      {
        name:"Program-v1",
        url:"http://162.240.33.243:3001/uploads/AdsMedia/Program-v1.jpg",
        filter: "ads",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Program-v2",
        url:"http://162.240.33.243:3001/uploads/AdsMedia/Program-v2.jpg",
        filter: "ads",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Program-v3",
        url:"http://162.240.33.243:3001/uploads/AdsMedia/Program-v3.jpg",
        filter: "ads",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"helfinch-intrapreneur-v1.jpg",
        url:"http://162.240.33.243:3001/uploads/AdsMedia/helfinch-intrapreneur-v1.jpg",
        filter: "ads",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"helfinch-intrapreneur-v2.jpg",
        url:"http://162.240.33.243:3001/uploads/AdsMedia/helfinch-intrapreneur-v2.jpg",
        filter: "ads",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"helfinch-intrapreneur-v3.jpg",
        url:"http://162.240.33.243:3001/uploads/AdsMedia/helfinch-intrapreneur-v3.jpg",
        filter: "ads",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('AdsMedia', null, {});
  }
};
