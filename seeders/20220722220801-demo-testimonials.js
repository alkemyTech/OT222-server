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
    await queryInterface.bulkInsert('testimonials', [
      {
        name: 'Testimony 1',
        image: 'https://picsum.photos/400/400',
        content:
          'Quisque non mi eu felis varius varius. Nam vestibulum arcu eget venenatis ultrices.',

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Testimony 2',
        image: 'https://picsum.photos/400/400',
        content:
          'Quisque pellentesque quis erat non consectetur. Donec sed tellus et nisi scelerisque feugiat. ',

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Testimony 3',
        image: 'https://picsum.photos/400/400',
        content:
          'Curabitur semper, eros a tristique vulputate, magna urna interdum metus, vitae.',

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Testimony 4',
        image: 'https://picsum.photos/400/400',
        content:
          'Nam consectetur dapibus massa. Praesent malesuada nisl et mi faucibus, sit. ',

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Testimony 5',
        image: 'https://picsum.photos/400/400',
        content:
          'Proin quis maximus ligula. Integer congue eget mi eget luctus. ',

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Testimony 6',
        image: 'https://picsum.photos/400/400',
        content:
          'In molestie varius tristique. Vestibulum elementum leo dignissim, pretium est vestibulum. ',

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Testimony 7',
        image:
          'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk',
        content: 'Morbi aliquam metus nec neque tristique, ',

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: ' Testimony8',
        image: 'https://picsum.photos/400/400',
        content:
          'Sed a tortor feugiat, cursus leo tincidunt, scelerisque ligula. Aenea.',

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Testimony 9',
        image: 'https://picsum.photos/400/400',
        content:
          'Suspendisse potenti. Praesent lobortis viverra turpis, at dapibus veli.',

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Testimony 10',
        image: 'https://picsum.photos/400/400',
        content:
          'Suspendisse congue lectus lacus, sit amet fermentum urna pellentesque non.',

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Testimony 11',
        image:
          'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk',
        content: 'Morbi aliquam metus nec neque tristique. ',

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Testimony 12',
        image:
          'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk',
        content: 'Morbi aliquam metus nec neque tristique. ',

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
    await queryInterface.bulkDelete('testimonials', null, {});
  },
};
