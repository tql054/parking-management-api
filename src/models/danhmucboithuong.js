'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Danhmucboithuong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.hasMany(models.Dangkyboithuong)
    }
  };
  Danhmucboithuong.init({
    tendmbt: DataTypes.STRING,
    tienbt: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Danhmucboithuong',
  });
  return Danhmucboithuong;
};