'use strict';
/** @type {import('sequelize-cli').Migration} */
const { enumData } = require('../utils/contansts');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bat_dong_sans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tenBatDongSan: {
        type: Sequelize.STRING,
        allowNull: false
      },
      diaChi: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tinhThanh: {
        type: Sequelize.STRING,
        allowNull: false
      },
      quanHuyen: {
        type: Sequelize.STRING,
      },
      phuongXa: {
        type: Sequelize.STRING,
      },
      dienTich: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue:0
      },
      soTang: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      soPhongNgu: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      soPhongTam: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      coNoiThat: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
      loaiBatDongSan: {
        type: Sequelize.ENUM,
        values: enumData.propertyTypes  
      },
      huongNha: {
        type: Sequelize.ENUM,
        values: enumData.directions
      },
      huongBanCong: {
        type: Sequelize.ENUM,
        values: enumData.directions
      },
      daXacThuc: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
    await queryInterface.dropTable('Bat_dong_sans');
  }
};