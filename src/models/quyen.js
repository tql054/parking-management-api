'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quyen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Quyen.hasMany(models.Taikhoan, {foreignKey:'maQuuen', as:'maquyenTK'})
      // Quyen.hasMany(models.Doituongnhantb, {foreignKey:'maQuuen', as:'maquyenDTTB'})
      this.hasMany(models.Taikhoan)
      this.hasMany(models.Doituongnhantb)
    }
  };
  Quyen.init({
    tenquyen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Quyen',
  });
  return Quyen;
};