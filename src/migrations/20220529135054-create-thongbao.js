'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Thongbaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nguoidang: {
        type: Sequelize.STRING(11),
        references: {
          model: 'Quanlies', // name of Target model
          key: 'sodienthoai', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      tieude: {
        type: Sequelize.STRING
      },
      noidung: {
        type: Sequelize.STRING
      },
      ngaydang: {
        type: Sequelize.DATEONLY
      },
      quanly: {
        type: Sequelize.STRING(11)
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
    await queryInterface.dropTable('Thongbaos');
  }
};