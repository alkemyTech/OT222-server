"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "socialMedia",
      [
        {
          name: "Facebook",
          url: "https://www.facebook.com/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {})
  },
}
