'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Odo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // Odo.belongsTo(models.Khudo, {foreignKey:'makhudo', targetKey:'makhudo', as:'makhudoOdo'})
        // Odo.hasMany(models.Dangkythanhvien, {foreignKey:'makhudo', as:'makhudoDKTV'})
        // this.belongsTo(models.Khudo)
        // this.hasMany(models.Dangkythanhvien)
    }
  };
  Odo.init({
    tenodo: DataTypes.STRING,
    makhudo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Odo',
  });
  return Odo;
};