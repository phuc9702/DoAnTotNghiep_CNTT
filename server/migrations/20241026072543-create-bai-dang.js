'use strict';

const { enumData } = require('../utils/contansts');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bai_dangs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idBaiDang: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tieuDe: {
        type: Sequelize.STRING,
        allowNull: false
      },
      moTa: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      gia: {
        type: Sequelize.BIGINT,
        defaultValue: 0
      },
      donViGia: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue:0
      },
      loaiTin: {
        type: Sequelize.ENUM,
        values: enumData.listingTypes
      },
      saoTrungBinh: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue:0
      }, 
      ngayHetHan: {
        type: Sequelize.DATE,
        allowNull: false
      },
      ngayDayTin: {
        type: Sequelize.DATE,
        allowNull: false
      },
      trangThai: {
        type: Sequelize.ENUM,
        values: enumData.postStatus
      },
      idNguoi_dung: {
        type: Sequelize.INTEGER,
        references: {
          model:"Nguoi_dungs",
          key:"id"
        },
      },
      idBatDongSan: {
        type: Sequelize.INTEGER,
        references: {
          model:"Bat_dong_sans",
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
    await queryInterface.dropTable('Bai_dangs');
  }
};