'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Leads', [
    {
      "leadAddress": "Sector - 127",
      "leadBusinessName": "Amazon",
      "leadCategory": "Possible",
      "leadCity": "Noida",
      "leadContactPerson": "Mahesh",
    //   "leadDateAndTime": "05-04-2023 17:41:00",
      "leadDesignation": "Manager",
      "leadEmail": "mahesh@amazon.com",
      "leadNotes": "Interested",
      "leadOwner": 0,
      "leadPhoneNumber": "9876543012",
      "leadPincode": "123456",
      "leadState": "Uttar Pradesh",
      "leadSubmitDate": "05-04-2023",
      "leadSubmitTime": "17:40:55",
      "leadsBy": 1000,

      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      "leadAddress": "Kashmiri Gate",
      "leadBusinessName": "Lenovo",
      "leadCategory": "Potential",
      "leadCity": "Delhi",
      "leadContactPerson": "Suresh",
    //   "leadDateAndTime": "05-04-2023 17:41:00",
      "leadDesignation": "Sub - Manager",
      "leadEmail": "suresh@lenovo.com",
      "leadNotes": "Not Interested",
      "leadOwner": 0,
      "leadPhoneNumber": "9876512340",
      "leadPincode": "654321",
      "leadState": "Delhi",
      "leadSubmitDate": "05-04-2023",
      "leadSubmitTime": "17:40:55",
      "leadsBy": 1000,

      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      "leadAddress": "NSP",
      "leadBusinessName": "Amazon",
      "leadCategory": "brAIn",
      "leadCity": "Delhi",
      "leadContactPerson": "Sohan",
    //   "leadDateAndTime": "05-04-2023 17:41:00",
      "leadDesignation": "Deputy Manager",
      "leadEmail": "sohan@amazon.com",
      "leadNotes": "Interested",
      "leadOwner": 0,
      "leadPhoneNumber": "7890123456",
      "leadPincode": "234567",
      "leadState": "Delhi",
      "leadSubmitDate": "05-04-2023",
      "leadSubmitTime": "17:40:55",
      "leadsBy": 1000,

      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      "leadAddress": "Sector - 67",
      "leadBusinessName": "Google",
      "leadCategory": "Potential",
      "leadCity": "Gurugram",
      "leadContactPerson": "Vikram",
    //   "leadDateAndTime": "05-04-2023 17:41:00",
      "leadDesignation": "Associate Manager",
      "leadEmail": "vikram@google.com",
      "leadNotes": "Interested",
      "leadOwner": 0,
      "leadPhoneNumber": "9087654321",
      "leadPincode": "123456",
      "leadState": "Haryana",
      "leadSubmitDate": "05-04-2023",
      "leadSubmitTime": "17:40:55",
      "leadsBy": 1000,

      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      "leadAddress": "Sector - 99",
      "leadBusinessName": "Acer",
      "leadCategory": "Warm",
      "leadCity": "Mumbai",
      "leadContactPerson": "Komal",
    //   "leadDateAndTime": "05-04-2023 17:41:00",
      "leadDesignation": "Sub Associate Manager",
      "leadEmail": "komal@acer.com",
      "leadNotes": "Interested",
      "leadOwner": 0,
      "leadPhoneNumber": "9812345670",
      "leadPincode": "654321",
      "leadState": "Maharastra",
      "leadSubmitDate": "05-04-2023",
      "leadSubmitTime": "17:40:55",
      "leadsBy": 1000,

      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Leads', null, {});
  }
};
