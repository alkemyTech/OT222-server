"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Usuario",
          lastName: "Demo",
          email: "test@test.com",
          password:
            "$2b$10$2C1wtfesposW9qrr2tLWqenQdd.xiva02jBP6pTQPTgG85vU4mfr2",
          roleId: 1,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Usuario",
          lastName: "Demo",
          email: "test1@test.com",
          password:
            "$2b$10$2C1wtfesposW9qrr2tLWqenQdd.xiva02jBP6pTQPTgG85vU4mfr2",
          roleId: 1,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Usuario",
          lastName: "Demo",
          email: "test2@test.com",
          password:
            "$2b$10$2C1wtfesposW9qrr2tLWqenQdd.xiva02jBP6pTQPTgG85vU4mfr2",
          roleId: 1,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Usuario",
          lastName: "Demo",
          email: "test3@test.com",
          password:
            "$2b$10$2C1wtfesposW9qrr2tLWqenQdd.xiva02jBP6pTQPTgG85vU4mfr2",
          roleId: 1,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Usuario",
          lastName: "Demo",
          email: "test4@test.com",
          password:
            "$2b$10$2C1wtfesposW9qrr2tLWqenQdd.xiva02jBP6pTQPTgG85vU4mfr2",
          roleId: 1,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Usuario",
          lastName: "Demo",
          email: "test5@test.com",
          password:
            "$2b$10$2C1wtfesposW9qrr2tLWqenQdd.xiva02jBP6pTQPTgG85vU4mfr2",
          roleId: null,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Usuario",
          lastName: "Demo",
          email: "test6@test.com",
          password:
            "$2b$10$2C1wtfesposW9qrr2tLWqenQdd.xiva02jBP6pTQPTgG85vU4mfr2",
          roleId: null,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Usuario",
          lastName: "Demo",
          email: "test7@test.com",
          password:
            "$2b$10$2C1wtfesposW9qrr2tLWqenQdd.xiva02jBP6pTQPTgG85vU4mfr2",
          roleId: null,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Usuario",
          lastName: "Demo",
          email: "test8@test.com",
          password:
            "$2b$10$2C1wtfesposW9qrr2tLWqenQdd.xiva02jBP6pTQPTgG85vU4mfr2",
          roleId: null,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Usuario",
          lastName: "Demo",
          email: "test9@test.com",
          password:
            "$2b$10$2C1wtfesposW9qrr2tLWqenQdd.xiva02jBP6pTQPTgG85vU4mfr2",
          roleId: null,
          image:
            "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
