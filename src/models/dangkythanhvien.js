'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dangkythanhvien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Xe)
      this.belongsTo(models.Odo)
      this.hasMany(models.Dangkyvipham)
      this.hasMany(models.Dangkyboithuong)
    }
  };
  Dangkythanhvien.init({
    biensoxe: DataTypes.STRING,
    thoigianbatdau: DataTypes.DATE,
    thoigianketthuc: DataTypes.DATE,
    thoigiankethucthuc: DataTypes.DATE,
    trangthai: DataTypes.STRING,
    odo: DataTypes.STRING,
    ttthanhtoan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dangkythanhvien',
  });
  return Dangkythanhvien;
};