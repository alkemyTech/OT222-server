'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Contacts', [{
      name:"Maria",
      phone:"+57 (1) 888 888 888",
      email:"email@email.com",
      message:"mensajito",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
    name:"Jose",
    phone:"+57 (1) 888 888 888",
    email:"email@email.com",
    message:"mensajito",
    createdAt: new Date,
    updatedAt: new Date
    },
    {
      name:"Rodrigo",
      phone:"+57 (1) 888 888 888",
      email:"email@email.com",
      message:"mensajito",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name:"Ana",
      phone:"+57 (1) 888 888 888",
      email:"email@email.com",
      message:"mensajito",
      createdAt: new Date,
      updatedAt: new Date
    },

], {});
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
