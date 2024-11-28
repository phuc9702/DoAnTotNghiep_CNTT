'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Binh_luan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Binh_luan.init({
    idNguoi_dung: DataTypes.INTEGER,
    idBai_dang: DataTypes.INTEGER,
    idCha: DataTypes.INTEGER,
    noiDung: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Binh_luan',
  });
  return Binh_luan;
};