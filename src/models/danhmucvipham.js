'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Danhmucvipham extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Dangkyvipham)
    }
  };
  Danhmucvipham.init({
    tendmvp: DataTypes.STRING,
    tienphat: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Danhmucvipham',
  });
  return Danhmucvipham;
};