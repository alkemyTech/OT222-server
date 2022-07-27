"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Noticia",
          description:
            "Nostrud aliqua culpa ut aliquip aliquip amet exercitation veniam consectetur eu.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Evento",
          description:
            "Nostrud aliqua culpa ut aliquip aliquip amet exercitation veniam consectetur eu.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Efemerides",
          description:
            "Nostrud aliqua culpa ut aliquip aliquip amet exercitation veniam consectetur eu.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Economia",
          description:
            "Nostrud aliqua culpa ut aliquip aliquip amet exercitation veniam consectetur eu.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {
      truncate: true,
      cascade: true,
    });
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};