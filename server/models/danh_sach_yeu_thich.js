'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Danh_sach_yeu_thich extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Danh_sach_yeu_thich.init({
    idNguoi_dung: DataTypes.INTEGER,
    idBai_dang: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Danh_sach_yeu_thich',
  });
  return Danh_sach_yeu_thich;
};