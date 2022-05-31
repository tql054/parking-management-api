'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Dangkythanhviens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      biensoxe: {
        type: Sequelize.STRING(10),
        references: {
          model: 'Xes', // name of Target model
          key: 'biensoxe', // key in sTarget model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      thoigianbatdau: {
        type: Sequelize.DATE
      },
      thoigianketthuc: {
        type: Sequelize.DATE
      },
      thoigiankethucthuc: {
        type: Sequelize.DATE
      },
      trangthai: {
        type: Sequelize.STRING(30)
      },
      odo: {
        allowNull: false,
        type: Sequelize.STRING(10),
        references: {
          model: 'Odos', // name of Target model
          key: 'tenodo', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      ttthanhtoan: {
        type: Sequelize.STRING(30)
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
    await queryInterface.dropTable('Dangkythanhviens');
  }
};