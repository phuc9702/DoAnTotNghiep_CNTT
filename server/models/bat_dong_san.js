'use strict';
const {
  Model
} = require('sequelize');
const { enumData } = require('../utils/contansts');
module.exports = (sequelize, DataTypes) => {
  class Bat_dong_san extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bat_dong_san.init({
    tenBatDongSan: DataTypes.STRING,
    diaChi: DataTypes.STRING,
    tinhThanh: DataTypes.STRING,
    quanHuyen: DataTypes.STRING,
    phuongXa: DataTypes.STRING,
    dienTich: DataTypes.INTEGER,
    soTang: DataTypes.INTEGER,
    soPhongNgu: DataTypes.INTEGER,
    soPhongTam: DataTypes.INTEGER,
    coNoiThat: DataTypes.BOOLEAN,
    loaiBatDongSan: {
      type: DataTypes.ENUM,
      values: enumData.propertyTypes
    },
    huongNha: {
      type: DataTypes.ENUM,
      values: enumData.directions
    },
    huongBanCong: {
      type: DataTypes.ENUM,
      values: enumData.directions
    },
    daXacThuc: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Bat_dong_san',
  });
  return Bat_dong_san;
};