'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Xes', {
      biensoxe: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(10)
      },
      thanhvien: {
        type: Sequelize.STRING(11),
        references: {
          model: 'Thanhviens', // name of Target model
          key: 'sodienthoai', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      loaixe: {
        type: Sequelize.STRING,
        references: {
          model: 'Loaixes', // name of Target model
          key: 'loaixe', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('Xes');
  }
};