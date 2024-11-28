'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Danh_gia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Danh_gia.init({
    idBai_dang: DataTypes.INTEGER,
    idNguoi_dung: DataTypes.INTEGER,
    noiDung: DataTypes.TEXT,
    soSao: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Danh_gia',
  });
  return Danh_gia;
};