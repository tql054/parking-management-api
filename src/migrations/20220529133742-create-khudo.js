'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Khudos', {
      makhudo: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      loaixe: {
        type: Sequelize.STRING,
        references: {
          model: 'Loaixes', // name of Target model
          key: 'loaixe', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Khudos');
  }
};