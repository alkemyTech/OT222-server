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

        name: 'Luciano',
        image: 'luciano.jpg',
        content:
          'Quisque non mi eu felis varius varius. Nam vestibulum arcu eget venenatis ultrices.',

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {

        name: 'Maria Perez',
        image: 'maria.jpg',
        content:
          'Quisque pellentesque quis erat non consectetur. Donec sed tellus et nisi scelerisque feugiat. ',

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {

        name: 'Noelia Perez',
        image: 'noelia.jpg',
        content:
          'Curabitur semper, eros a tristique vulputate, magna urna interdum metus, vitae.',

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {

        name: 'Alvaro Perez',
        image: 'jose.jpg',
        content:
          'Nam consectetur dapibus massa. Praesent malesuada nisl et mi faucibus, sit. ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Magdalena Perez',
        image: 'maria.jpg',
        content:
          'Proin quis maximus ligula. Integer congue eget mi eget luctus. ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jeronimo Perez',
        image: 'luciano.jpg',
        content:
          'In molestie varius tristique. Vestibulum elementum leo dignissim, pretium est vestibulum. ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lucia Perez',
        image: "noelia.jpg",
        content: 'Morbi aliquam metus nec neque tristique, ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: ' Jose Perez',
        image: 'jose.jpg',
        content:
          'Sed a tortor feugiat, cursus leo tincidunt, scelerisque ligula. Aenea.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Milagros Perez',
        image: 'maria.jpg',
        content:
          'Suspendisse potenti. Praesent lobortis viverra turpis, at dapibus veli.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Juan Perez',
        image: 'luciano.jpg',
        content:
          'Suspendisse congue lectus lacus, sit amet fermentum urna pellentesque non.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pedro Perez',
        image: 'jose.jpg',
        content: 'Morbi aliquam metus nec neque tristique. ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mauricio Perez',
        image: 'jose.jpg',
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
