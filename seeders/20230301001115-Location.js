'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Acquirer', [
      { name: 'STOCK-BULEVAR', createdAt: new Date(), updatedAt: new Date() },
      { name: 'LEOPOLDO GROSS', createdAt: new Date(), updatedAt: new Date() },
      { name: 'LABORATORIO', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};