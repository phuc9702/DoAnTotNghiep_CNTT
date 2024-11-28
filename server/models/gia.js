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
    hienThiThongTin: DataTypes.BOOLEAN,
    uuTien: DataTypes.INTEGER,
    diemCanCo : DataTypes.INTEGER,
    diemCanLenCap : DataTypes.INTEGER,
    gia: DataTypes.BIGINT,
    thoiGianHetHan: DataTypes.INTEGER,
    duongDanHinhAnh: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Gia',
  });
  return Gia;
};