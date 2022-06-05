'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Taikhoan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Taikhoan.belongsTo(models.Quyen, {foreignKey:'maquyen', targetKey:'id', as:'maquyenTK'})
      // Taikhoan.hasOne(models.Quanly, {foreignKey: 'sodienthoai', as:'sodienthoaiQL'})
      // Taikhoan.hasOne(models.Nhanvien, {foreignKey: 'sodienthoai', as:'sodienthoaiNV'})
      // Taikhoan.hasOne(models.Thanhvien, {foreignKey: 'sodienthoai', as:'sodienthoaiTV'})
      // this.belongsTo(models.Quyen)
      // this.hasOne(models.Quanly)
      // this.hasOne(models.Nhanvien)
      // this.hasOne(models.Thanhvien)
    }
  };
  Taikhoan.init({
    sodienthoai: DataTypes.STRING,
    matkhau: DataTypes.STRING,
    maquyen: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Taikhoan',
  });
  return Taikhoan;
};