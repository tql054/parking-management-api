'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Taikhoans', {
      sodienthoai: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      matkhau: {
        type: Sequelize.STRING
      },
      maquyen: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Quyens', // name of Target model
          key: 'id', // key in Target model that we're referencing
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
    await queryInterface.dropTable('Taikhoans');
  }
};