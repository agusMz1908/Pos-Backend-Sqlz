'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Acquirer', [
      { name: 'OCA', createdAt: new Date(), updatedAt: new Date() },
      { name: 'VISA', createdAt: new Date(), updatedAt: new Date() },
      { name: 'HANDY', createdAt: new Date(), updatedAt: new Date() },
      { name: 'RESONANCE', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
