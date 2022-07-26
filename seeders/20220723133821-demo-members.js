"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Members",
      [
        {
          name: "Maria Irola",
          image:
            "https://res.cloudinary.com/diylksocz/image/upload/v1658584329/alkemy/Mar%C3%ADa_Irola_manipg.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rodrigo Fuente",
          image:
            "https://res.cloudinary.com/diylksocz/image/upload/v1658584328/alkemy/Rodrigo_Fuente_xydzec.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Miriam Rodriguez",
          image:
            "https://res.cloudinary.com/diylksocz/image/upload/v1658584328/alkemy/Miriam_Rodriguez_dyzx22.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maria Garcia",
          image:
            "https://res.cloudinary.com/diylksocz/image/upload/v1658584328/alkemy/Mar%C3%ADa_Garcia_oiaqmu.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Marco Fernandez",
          image:
            "https://res.cloudinary.com/diylksocz/image/upload/v1658584328/alkemy/Marco_Fernandez_iungop.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cecilia Mendez",
          image:
            "https://res.cloudinary.com/diylksocz/image/upload/v1658584328/alkemy/Cecilia_Mendez_voybtg.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Marita Gomez",
          image:
            "https://res.cloudinary.com/diylksocz/image/upload/v1658584328/alkemy/Marita_Gomez_vbxoiv.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Members", null, { truncate: true, cascade: true })
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
