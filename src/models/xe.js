'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Xe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.belongsTo(models.Loaixe)
      // this.belongsTo(models.Thanhvien)
      // this.hasMany(models.Dangkythanhvien)
    }
  };
  Xe.init({
    biensoxe: DataTypes.STRING,
    thanhvien: DataTypes.STRING,
    loaixe: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Xe',
  });
  return Xe;
};