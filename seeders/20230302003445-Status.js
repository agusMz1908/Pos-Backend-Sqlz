'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Status', [
      { name: 'LIBRE', createdAt: new Date(), updatedAt: new Date() },
      { name: 'DE FABRICA', createdAt: new Date(), updatedAt: new Date() },
      { name: 'EJECUCION', createdAt: new Date(), updatedAt: new Date() },
      { name: 'DESTRUIDO', createdAt: new Date(), updatedAt: new Date() },
      { name: 'EN REPARACION', createdAt: new Date(), updatedAt: new Date() },
      { name: 'ROBADO', createdAt: new Date(), updatedAt: new Date() },
      { name: 'PERDIDO', createdAt: new Date(), updatedAt: new Date() },
      { name: 'BLOQUEADO', createdAt: new Date(), updatedAt: new Date() },
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
