'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Device', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      serialNumber: {
        type: Sequelize.STRING
      },
      partNumber: {
        type: Sequelize.STRING
      },
      acquirerID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Acquirer',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onDelete: 'CASCADE'
      },
      connectionID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Connection',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onDelete: 'CASCADE'
      },
      locationID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Location',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onDelete: 'CASCADE'
      },
      modelID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Model',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onDelete: 'CASCADE'
      },
      statusID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Status',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onDelete: 'CASCADE'
      },
      remarks: {
        allowNull: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Device');
  }
};