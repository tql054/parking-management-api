'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Thongbao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Quanly)
      this.hasMany(models.Dinhkemtb)
    }
  };
  Thongbao.init({
    nguoidang: DataTypes.STRING,
    tieude: DataTypes.STRING,
    noidung: DataTypes.STRING,
    ngaydang: DataTypes.DATE,
    quanly: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Thongbao',
  });
  return Thongbao;
};