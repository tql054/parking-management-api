'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dangkyvanglai extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.belongsTo(models.Nhanvien)
      // this.belongsTo(models.Odo)
    }
  };
  Dangkyvanglai.init({
    biensoxe: DataTypes.STRING,
    hoten: DataTypes.STRING,
    cccd: DataTypes.STRING,
    sodienthoai: DataTypes.STRING,
    thoigianbatdau: DataTypes.DATE,
    thoigianketthuc: DataTypes.DATE,
    thoigiankethucthuc: DataTypes.DATE,
    nhanvien: DataTypes.STRING,
    odo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dangkyvanglai',
  });
  return Dangkyvanglai;
};