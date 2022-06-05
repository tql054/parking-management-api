'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dangkyvipham extends Model {
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
  Dangkyvipham.init({
    madangky: DataTypes.INTEGER,
    madmvp: DataTypes.INTEGER,
    tinhtrang: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dangkyvipham',
  });
  return Dangkyvipham;
};