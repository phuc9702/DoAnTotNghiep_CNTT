'use strict';
const {
  Model
} = require('sequelize');
const { enumData } = require('../utils/contansts');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init({
    idPost: DataTypes.STRING,
    title: DataTypes.STRING,
    address: DataTypes.STRING,
    province: DataTypes.STRING,
    district: DataTypes.STRING,
    ward: DataTypes.STRING,
    avgScore: DataTypes.FLOAT,
    price: DataTypes.BIGINT,
    size: DataTypes.INTEGER,
    priceUnit: DataTypes.BIGINT,//tìm kiếm số tiền trên một m2
    description: DataTypes.TEXT,
    floor: DataTypes.INTEGER,
    bedroom: DataTypes.INTEGER,
    bathroom: DataTypes.INTEGER,
    isFurniture: DataTypes.BOOLEAN,
    listingType: {
      type: DataTypes.ENUM,
      values: enumData.listingTypes
    },
    propertyType: {
      type: DataTypes.ENUM,
      values: enumData.propertyTypes
    },
    direction: {
      type: DataTypes.ENUM,
      values: enumData.directions
    },
    balonDirection: {
      type: DataTypes.ENUM,
      values: enumData.directions
    },
    verified: DataTypes.BOOLEAN,
    expiredDate: DataTypes.DATE,
    expiredPost: DataTypes.DATE,
    status: {
      type: DataTypes.ENUM,
      values: enumData.postStatus
    },
    idUser: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};