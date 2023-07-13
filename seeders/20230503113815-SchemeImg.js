'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('SchemeImgs', [
      {
        state: "Maharashtra",
        pic1:"https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
        pic2:"https://images.pexels.com/photos/1542495/pexels-photo-1542495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        pic3:"https://images.pexels.com/photos/296234/pexels-photo-296234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        pic4:"https://images.pexels.com/photos/417023/pexels-photo-417023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        pic5:"https://images.pexels.com/photos/2026960/pexels-photo-2026960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: "Assam",
        pic1:"https://images.pexels.com/photos/296559/pexels-photo-296559.jpeg?auto=compress&cs=tinysrgb&w=600",
        pic2:"https://images.pexels.com/photos/533961/pexels-photo-533961.jpeg?auto=compress&cs=tinysrgb&w=600",
        pic3:"https://images.pexels.com/photos/370037/pexels-photo-370037.jpeg?auto=compress&cs=tinysrgb&w=600",
        pic4:"https://images.pexels.com/photos/218673/pexels-photo-218673.jpeg?auto=compress&cs=tinysrgb&w=600",
        pic5:"https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg?auto=compress&cs=tinysrgb&w=600",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('SchemeImgs', null, {});
  }
};
