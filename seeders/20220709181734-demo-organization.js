'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Organizations', [{
      name: "Somos Mas",
      image: "",
      phone: "+54 9 11678987",
      adress: "adress de la empresa",
      welcomeText: " welcome text de la empresa que aparece en el home",
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
