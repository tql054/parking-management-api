'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Thanhvien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Taikhoan)
      this.hasMany(models.Phanhoi)
      this.hasMany(models.Xe)  
    }
  };
  Thanhvien.init({
    sodienthoai: DataTypes.STRING,
    hoten: DataTypes.STRING,
    diachi: DataTypes.STRING,
    cccd: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Thanhvien',
  });
  return Thanhvien;
};