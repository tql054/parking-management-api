'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quanly extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Quanly.belongsTo(models.Taikhoan, {foreignKey:'sodienthoai', as:'sodienthoaiQL'})
      // Quanly.hasMany(models.Thongbao, {foreignKey:'sodienthoai', as:'sodienthoaiTB'})
      // this.belongsTo(models.Taikhoan)
      // this.hasMany(models.Thongbao)
    }
  };
  Quanly.init({
    sodienthoai: DataTypes.STRING,
    hoten: DataTypes.STRING,
    diachi: DataTypes.STRING,
    CCCD: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Quanly',
  });
  return Quanly;
};