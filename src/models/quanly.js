'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuanLy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  QuanLy.init({
    sdt: DataTypes.STRING,
    hoten: DataTypes.STRING,
    diachi: DataTypes.STRING,
    cccd: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'QuanLy',
  });
  return QuanLy;
};