'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Khudo extends Model {
    static associate(models) {
      // Khudo.belongsTo(models.Loaixe, {foreignKey:'loaixe', targetKey:'loaixe', as:'loaixeKhudo'})
      // Khudo.hasMany(models.Odo, {foreignKey:'makhudo', as: 'makhudoOdo'})
      this.belongsTo(models.Loaixe)
      this.hasMany(models.Odo)
    }
  };
  Khudo.init({
    makhudo: DataTypes.STRING,
    loaixe: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Khudo',
  });
  return Khudo;
};