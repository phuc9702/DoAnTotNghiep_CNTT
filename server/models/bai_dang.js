'use strict';
const {
  Model
} = require('sequelize');
const { enumData } = require('../utils/contansts');
module.exports = (sequelize, DataTypes) => {
  class Bai_dang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bai_dang.init({
    idBaiDang: DataTypes.STRING,
    tieuDe: DataTypes.STRING,
    moTa: DataTypes.TEXT,
    gia: DataTypes.BIGINT,
    donViGia: DataTypes.BIGINT,//tìm kiếm số tiền trên một m2
    loaiTin: {
      type: DataTypes.ENUM,
      values: enumData.listingTypes
    },
    saoTrungBinh: DataTypes.FLOAT,
   
    ngayHetHan: DataTypes.DATE,
    ngayDayTin: DataTypes.DATE,
    trangThai: {
      type: DataTypes.ENUM,
      values: enumData.postStatus
    },
    idNguoi_dung: DataTypes.INTEGER,
    idBat_dong_san: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bai_dang',
  });
  return Bai_dang;
};