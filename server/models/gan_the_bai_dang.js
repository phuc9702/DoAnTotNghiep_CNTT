'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gan_the_bai_dang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Gan_the_bai_dang.init({
    idGan_the: DataTypes.INTEGER,
    idBai_dang: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Gan_the_bai_dang',
  });
  return Gan_the_bai_dang;
};