'use strict';

const { enumData } = require('../utils/contansts');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPost: {
        type: Sequelize.STRING,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      province: {
        type: Sequelize.STRING,
        allowNull: false
      },
      district: {
        type: Sequelize.STRING,
      },
      ward: {
        type: Sequelize.STRING,
      },
      avgScore: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue:0
      },
      price: {
        type: Sequelize.BIGINT,
        defaultValue: 0
      },
      size: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue:0
      },
      priceUnit: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue:0
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      floor: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      bedroom: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      bathroom: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      isFurniture: {
        type: Sequelize.BOOLEAN,
        defaultValue:0
      },
      listingType: {
        type: Sequelize.ENUM,
        values: enumData.listingTypes
      },
      propertyType: {
        type: Sequelize.ENUM,
        values: enumData.propertyTypes
      },
      direction: {
        type: Sequelize.ENUM,
        values: enumData.directions
      },
      balonDirection: {
        type: Sequelize.ENUM,
        values: enumData.directions
      },
      verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      expiredDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      expiredPost: {
        type: Sequelize.expiredDate,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM,
        values: enumData.postStatus
      },
      idUser: {
        type: Sequelize.INTEGER,
        references: {
          model:"Users",
          key:"id"
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('posts');
  }
};