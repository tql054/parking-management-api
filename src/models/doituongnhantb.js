'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doituongnhantb extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.belongsTo(models.Quyen)
      // this.belongsTo(models.Thongbao)
    }
  };
  Doituongnhantb.init({
    mathongbao: DataTypes.INTEGER,
    maquyen: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Doituongnhantb',
  });
  return Doituongnhantb;
};