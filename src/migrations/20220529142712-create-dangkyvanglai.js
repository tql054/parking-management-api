'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Dangkyvanglais', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      biensoxe: {
        type: Sequelize.STRING(10)
      },
      hoten:  {
        type: Sequelize.STRING
      },
      cccd: {
        type: Sequelize.STRING(10)
      },
      sodienthoai: {
        type: Sequelize.STRING(11),
      },
      thoigianbatdau: {
        type: Sequelize.DATE
      },
      thoigianketthuc: {
        type: Sequelize.DATE
      },
      thoigianketthucthuc: {
        type: Sequelize.DATE
      },
      nhanvien: {
        type: Sequelize.STRING(11),
        references: {
          model: 'Nhanviens', // name of Target model
          key: 'sodienthoai', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      odo: {
        type: Sequelize.STRING(10),
        references: {
          model: 'Odos', // name of Target model
          key: 'tenodo', // key in Target model that we're referencing
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
    await queryInterface.dropTable('Dangkyvanglais');
  }
};