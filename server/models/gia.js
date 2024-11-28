'use strict';
const {
  Model
} = require('sequelize');
const { enumData } = require('../utils/contansts');
module.exports = (sequelize, DataTypes) => {
  class Gia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Gia.init({
    tenGia: {
      type: DataTypes.ENUM,
      values: enumData.pricings,
    },
    hienThiNgay: DataTypes.BOOLEAN,
    chiTietCapDo: DataTypes.FLOAT,
    uuTien: DataTypes.INTEGER,
    diemCanCo : DataTypes.INTEGER,
    diemCanLenCap : DataTypes.INTEGER,
    gia: DataTypes.BIGINT,
    ngayHetHan: DataTypes.INTEGER,
    duongDanHinhAnh: DataTypes.STRING,
  },  {
    sequelize,
    modelName: 'Gia',
    tableName: 'Gias',
  });
  return Gia;
};