'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dinhkemph extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Phanhoi)
    }
  };
  Dinhkemph.init({
    dinhkem: DataTypes.STRING,
    maphanhoi: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dinhkemph',
  });
  return Dinhkemph;
};