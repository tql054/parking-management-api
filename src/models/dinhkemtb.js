'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dinhkemtb extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.belongsTo(models.Thongbao)
    }
  };
  Dinhkemtb.init({
    mathongbao: DataTypes.INTEGER,
    tepdinhkiem: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dinhkemtb',
  });
  return Dinhkemtb;
};