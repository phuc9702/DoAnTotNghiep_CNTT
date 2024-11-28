'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nguoi_dung extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Nguoi_dung.belongsTo(models.Gia, { foreignKey: 'idGia', as: 'rGia' });

    }
  }
  Nguoi_dung.init({
    email: DataTypes.STRING,
    hoTen: DataTypes.STRING,
    dienThoai: DataTypes.STRING,
    emailXacThuc: DataTypes.BOOLEAN,
    dienThoaiXacThuc: DataTypes.BOOLEAN,
    matKhau: DataTypes.STRING,
    anhDaiDien: DataTypes.STRING,
    soDu: DataTypes.BIGINT,
    diem: DataTypes.INTEGER, 
    maKhoiPhucMatKhau: DataTypes.STRING,
    hanDungMaDatLaiMatKhau: DataTypes.DATE,
    idGia: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Nguoi_dung',
  });
  return Nguoi_dung;
};