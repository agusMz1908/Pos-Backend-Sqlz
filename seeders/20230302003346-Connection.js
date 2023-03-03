'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Connection', [
      { type: '3G', createdAt: new Date(), updatedAt: new Date() },
      { type: '3G-WIFI', createdAt: new Date(), updatedAt: new Date() },
      { type: 'ETH', createdAt: new Date(), updatedAt: new Date() },
      { type: 'FULL', createdAt: new Date(), updatedAt: new Date() },
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
