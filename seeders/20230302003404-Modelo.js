'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Modelo', [
      { name: 'MOVE 2500', createdAt: new Date(), updatedAt: new Date() },
      { name: 'MOVE 5000', createdAt: new Date(), updatedAt: new Date() },
      { name: 'LANE 3000', createdAt: new Date(), updatedAt: new Date() },
      { name: 'ICT 220', createdAt: new Date(), updatedAt: new Date() },
      { name: 'ICT 250', createdAt: new Date(), updatedAt: new Date() },
      { name: 'IWL 220', createdAt: new Date(), updatedAt: new Date() },
      { name: 'IWL 250', createdAt: new Date(), updatedAt: new Date() },
      { name: 'IWL 280', createdAt: new Date(), updatedAt: new Date() },
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
