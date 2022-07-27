'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('entries', [
      {
        name: 'News 1',
        image: 'https://picsum.photos/1920/500',
        content:
          'Quisque non mi eu felis varius varius. Nam vestibulum arcu eget venenatis ultrices.',
        categoryId: 1,
        type: 'news',
        deletedAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'News 2',
        image: 'https://picsum.photos/1920/501',
        content:
          'Quisque pellentesque quis erat non consectetur. Donec sed tellus et nisi scelerisque feugiat. ',
        categoryId: 1,
        type: 'news',
        deletedAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'News 3',
        image: 'https://picsum.photos/1920/503',
        content:
          'Curabitur semper, eros a tristique vulputate, magna urna interdum metus, vitae.',
        categoryId: 1,
        type: 'news',
        deletedAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'News 4',
        image: 'https://picsum.photos/1920/504',
        content:
          'Nam consectetur dapibus massa. Praesent malesuada nisl et mi faucibus, sit. ',
        categoryId: 1,
        type: 'news',
        deletedAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'News 5',
        image: 'https://picsum.photos/1920/505',
        content:
          'Proin quis maximus ligula. Integer congue eget mi eget luctus. ',
        categoryId: 1,
        type: 'news',
        deletedAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'News 6',
        image: 'https://picsum.photos/1920/506',
        content:
          'In molestie varius tristique. Vestibulum elementum leo dignissim, pretium est vestibulum. ',
        categoryId: 1,
        type: 'news',
        deletedAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("entries", null, { truncate: true, cascade: true })
  },
};
