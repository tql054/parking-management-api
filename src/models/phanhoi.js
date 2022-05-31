'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phanhoi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Nhanvien)
      this.belongsTo(models.Thanhvien)
      this.hasMany(models.Dinhkemph)

    }
  };
  Phanhoi.init({
    nhanvien: DataTypes.STRING,
    quanly: DataTypes.STRING,
    noidung: DataTypes.STRING,
    thoigian: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Phanhoi',
  });
  return Phanhoi;
};