'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Organizations', [{
      name:"Somos Mas",
      image:"https://www.somosmas.com/wp-content/uploads/2019/01/logo-somos-mas.png",
      phone:"+57 (1) 888 888 888",
      adress:"Calle Principal #1",
      welcomeText:"Bienvenido a Somos Mas",
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};