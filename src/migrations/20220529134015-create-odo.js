'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Odos', {
      tenodo: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      makhudo: {
        type: Sequelize.STRING,
        references: {
          model: 'Khudos', // name of Target model
          key: 'makhudo', // key in Target model that we're referencing
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
    await queryInterface.dropTable('Odos');
  }
};