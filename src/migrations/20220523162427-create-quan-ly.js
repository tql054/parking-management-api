'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('quanlies', {
      sdt: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(11)
      },
      hoten: {
        type: Sequelize.STRING
      },
      diachi: {
        type: Sequelize.STRING
      },
      cccd: {
        type: Sequelize.STRING(11),
        unique: true
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
    await queryInterface.dropTable('quanlies');
  }
};