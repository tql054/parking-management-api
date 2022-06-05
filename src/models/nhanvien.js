'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nhanvien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.belongsTo(models.Taikhoan)
      // this.hasMany(models.Dangkyvanglai)
      // this.hasMany(models.Phanhoi)
    }
  };
  Nhanvien.init({
    sodienthoai: DataTypes.STRING,
    hotvaten: DataTypes.STRING,
    diachi: DataTypes.STRING,
    cccd: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Nhanvien',
  });
  return Nhanvien;
};