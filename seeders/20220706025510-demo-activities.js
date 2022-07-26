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
    await queryInterface.bulkInsert('activities', [{
      name: 'Activity 1',
      image: 'https://picsum.photos/400/400',
      content: 'Quisque non mi eu felis varius varius. Nam vestibulum arcu eget venenatis ultrices. Ut tristique convallis enim, ac tincidunt nibh maximus vitae. Sed vel dignissim mi. Maecenas libero ex, tristique sit amet ultrices quis, auctor ac velit. Duis elementum quam erat, nec semper lectus pretium nec. Maecenas finibus placerat tortor. Duis ut urna eget nibh facilisis blandit eu vitae enim. Maecenas venenatis finibus quam, sit amet mollis ante lacinia sit amet. Mauris condimentum sagittis facilisis. Mauris eu tempor nisi, a interdum ipsum.',
      deletedAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Activity 2',
      image: 'https://picsum.photos/400/400',
      content: 'Quisque pellentesque quis erat non consectetur. Donec sed tellus et nisi scelerisque feugiat. Suspendisse in dignissim odio. Nunc rhoncus quam eget rutrum sollicitudin. Quisque gravida massa tortor, ac volutpat felis egestas et. Nulla tempus urna blandit pellentesque mattis. Aenean blandit, nibh sit amet facilisis imperdiet, arcu lectus ultricies ex, pellentesque convallis est turpis sit amet sapien. Quisque ultricies commodo magna vitae tincidunt.',
      deletedAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Activity 3',
      image: 'https://picsum.photos/400/400',
      content: 'Curabitur semper, eros a tristique vulputate, magna urna interdum metus, vitae volutpat nunc ex non eros. Duis eu consequat sem. Morbi a sollicitudin nunc, ut gravida arcu. Donec vitae scelerisque urna. Phasellus sit amet ante eu sapien maximus imperdiet. Suspendisse finibus mollis ipsum, eu faucibus justo. Cras efficitur quam eget vestibulum vehicula. Quisque nec risus ut eros mollis malesuada quis a augue. Integer ex mi, auctor sed viverra quis, convallis sit amet eros. Fusce eget sapien faucibus, viverra augue vel, molestie mauris. Mauris scelerisque felis ac eros pretium consequat. Sed eu enim et orci aliquet posuere eu sed nulla. Ut rutrum sit amet felis a eleifend.',
      deletedAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Activity 4',
      image: 'https://picsum.photos/400/400',
      content: 'Nam consectetur dapibus massa. Praesent malesuada nisl et mi faucibus, sit amet blandit enim blandit. In est sapien, dignissim ut velit euismod, pellentesque varius tellus. Proin et accumsan est, id facilisis odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt imperdiet ante, quis porta mi. Nullam fringilla accumsan accumsan.',
      deletedAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Activity 5',
      image: 'https://picsum.photos/400/400',
      content: 'Proin quis maximus ligula. Integer congue eget mi eget luctus. Praesent nec ultrices elit. Maecenas et ex eget enim mattis porttitor ut ut quam. Cras id nibh turpis. Donec congue cursus pulvinar. Suspendisse vulputate porta turpis sed congue. Etiam suscipit felis id elit egestas pharetra. Pellentesque semper turpis sed lorem malesuada, id lobortis elit condimentum. Vestibulum mollis rutrum felis, et sodales felis tristique consequat. Etiam et felis vitae nunc auctor molestie. Nullam fringilla convallis sapien, in fermentum nisi facilisis ut. In a libero semper, porttitor justo sit amet, efficitur leo. Mauris a nunc vestibulum, scelerisque lacus id, pretium libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      deletedAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Activity 6',
      image: 'https://picsum.photos/400/400',
      content: 'In molestie varius tristique. Vestibulum elementum leo dignissim, pretium est vestibulum, lobortis nisi. Mauris a hendrerit mi, non commodo est. Nunc ac erat et tellus finibus aliquam vel et risus. Donec neque erat, maximus eget aliquam pharetra, faucibus vel sapien. Duis semper pretium ante, nec vulputate ex fringilla id. Vestibulum gravida justo vitae dignissim maximus. Praesent in eleifend lectus, nec pharetra metus. Donec maximus, lacus sit amet varius auctor, sapien dui varius urna, feugiat pellentesque dolor lorem commodo dolor.',
      deletedAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Activity 7',
      image: 'https://picsum.photos/400/400',
      content: 'Morbi aliquam metus nec neque tristique, a consectetur ante tristique. Pellentesque interdum sed turpis vel eleifend. Nullam justo orci, dapibus ut aliquam efficitur, maximus ac elit. Sed porttitor lacus in ultricies imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis odio mollis, varius turpis in, consectetur tellus. Cras id ante feugiat, venenatis risus nec, tincidunt ante. Nunc pharetra, sapien nec auctor feugiat, mi tellus tempus nisl, et tincidunt sem nunc eget risus. Suspendisse dictum justo lacus, quis suscipit libero blandit a. Cras blandit turpis bibendum libero imperdiet, in congue lorem tristique. In id blandit dui, lacinia consectetur diam.',
      deletedAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Activity 8',
      image: 'https://picsum.photos/400/400',
      content: 'Sed a tortor feugiat, cursus leo tincidunt, scelerisque ligula. Aenean bibendum consequat malesuada. Aenean bibendum dignissim pretium. Praesent porttitor in leo quis pulvinar. Sed non ultricies lectus. Integer eget commodo urna. Nam faucibus bibendum lorem at gravida. Proin aliquet accumsan mollis. Pellentesque at massa lectus.',
      deletedAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Activity 9',
      image: 'https://picsum.photos/400/400',
      content: 'Suspendisse potenti. Praesent lobortis viverra turpis, at dapibus velit consectetur vel. In facilisis imperdiet lorem, eget tristique sapien porttitor vel. Etiam in justo consequat, pulvinar tortor ac, imperdiet nulla. Nunc eget rhoncus leo. Praesent non eros quis est tempus aliquet ut vel dui. Aenean in maximus magna, ac pellentesque orci. Morbi quis volutpat lorem. Sed urna enim, hendrerit et blandit a, pretium ut massa. Pellentesque euismod lacinia erat, eu accumsan enim hendrerit vitae. Maecenas sit amet euismod ex, sit amet feugiat felis. Sed nec arcu eu dui laoreet iaculis quis in elit. Sed malesuada tellus sit amet ultrices sagittis. Sed a arcu elit.',
      deletedAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Activity 10',
      image: 'https://picsum.photos/400/400',
      content: 'Suspendisse congue lectus lacus, sit amet fermentum urna pellentesque non. Praesent venenatis id risus non ornare. Nunc ullamcorper rhoncus neque vitae maximus. Donec massa risus, dignissim pharetra fermentum vel, semper quis purus. Sed porta nibh magna. Ut rhoncus varius maximus. Aenean a ipsum vel velit blandit malesuada. Sed lectus neque, pellentesque vel metus a, convallis molestie nunc.',
      deletedAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("activities", null, { truncate: true, cascade: true })
  }
};
