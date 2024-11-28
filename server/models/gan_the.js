'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gan_the extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Gan_the.init({
    ganThe: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Gan_the',
  });
  return Gan_the;
};