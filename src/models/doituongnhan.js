'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DoiTuongNhan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DoiTuongNhan.init({
    idtb: DataTypes.STRING,
    idquyen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DoiTuongNhan',
  });
  return DoiTuongNhan;
};