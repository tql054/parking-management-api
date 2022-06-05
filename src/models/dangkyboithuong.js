'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dangkyboithuong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.belongsTo(models.Danhmucvipham)
      // this.belongsTo(models.Dangkythanhvien)
    }
  };
  Dangkyboithuong.init({
    madangky: DataTypes.INTEGER,
    madmbt: DataTypes.INTEGER,
    tinhtrang: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dangkyboithuong',
  });
  return Dangkyboithuong;
};