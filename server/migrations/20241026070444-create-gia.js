'use strict';

const { enumData } = require('../utils/contansts');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Gias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tenGia: {
        type: Sequelize.ENUM,
        values:enumData.pricings,
      },
      hienThiNgay: {
        type: Sequelize.BOOLEAN
      },
      hienThiThongTin: {
        type: Sequelize.BOOLEAN
      },
      uuTien: {
        type: Sequelize.INTEGER
      },
      diemCanCo: {
        type: Sequelize.INTEGER
      },
      diemCanLenCap: {
        type: Sequelize.INTEGER
      },
      gia: {
        type: Sequelize.BIGINT
      },
      thoiGianHetHan: {
        type: Sequelize.INTEGER
      },
      duongDanHinhAnh: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Gias');
  }
};