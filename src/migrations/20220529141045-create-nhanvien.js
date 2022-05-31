'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Nhanviens', {
      sodienthoai: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(11),
        references: {
          model: 'Taikhoans', // name of Target model
          key: 'sodienthoai', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      hovaten: {
        type: Sequelize.STRING
      },
      diachi: {
        type: Sequelize.STRING
      },
      cccd: {
        type: Sequelize.STRING(10)
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
    await queryInterface.dropTable('Nhanviens');
  }
};