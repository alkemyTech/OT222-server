"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "organizations",
      [
        {
          name: "facebook",
          urls: "https://www.facebook.com/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "linkedin",
          urls: "https://www.linkedin.com/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "instagram",
          urls: "https://www.instagram.com/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
