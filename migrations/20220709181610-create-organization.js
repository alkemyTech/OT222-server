"use strict"
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("Organizations", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
        },
        image: {
          type: Sequelize.TEXT,
        },
        phone: {
          type: Sequelize.STRING,
        },
        adress: {
          type: Sequelize.STRING,
        },
        welcomeText: {
          type: Sequelize.TEXT,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      })
      .then(() => {
        queryInterface.addColumn("Organizations", "socialMediaId", {
          type: Sequelize.INTEGER,
          references: {
            model: "socialMedia",
            key: "id",
          },
          onUpdate: "cascade",
          onDelete: "cascade",
        })
      })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Organizations").then(() => {
      queryInterface.removeColumn("Organizations", "socialMediaId")
    })
  },
}
