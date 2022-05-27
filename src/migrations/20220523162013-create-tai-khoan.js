'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('taikhoans', {
      sdt: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      matkhau: {
        type: Sequelize.STRING
      },
      idquyen: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('taikhoans');
  }
};