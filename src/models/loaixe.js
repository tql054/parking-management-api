'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loaixe extends Model {
    static associate(models) {
      
      // Loaixe.hasMany(models.Khudo,  { foreignKey: 'loaixe', as:'loaixeKhudo'})
      // Loaixe.hasMany(models.Xe, { foreignKey: 'loaixe', as:'loaixePT'})
      // this.hasMany(models.Khudo)
      // this.hasMany(models.Xe)
    }
  };
  Loaixe.init({
    loaixe: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Loaixe',
  });
  return Loaixe;
};