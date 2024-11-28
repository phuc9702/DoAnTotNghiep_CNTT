'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Nguoi_dungs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hoTen: {
        type: Sequelize.STRING,
        allowNull:false
      },
      dienThoai: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      emailXacThuc: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
      dienThoaiXacThuc: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
      matKhau: {
        type: Sequelize.STRING,
        allowNull:false
      },
      anhDaiDien: {
        type: Sequelize.STRING,
      },
      soDu: {
        type: Sequelize.BIGINT,
        defaultValue:0
      },
      diem: {
        type: Sequelize.STRING,
        defaultValue:0
      },
      maKhoiPhucMatKhau: {
        type: Sequelize.STRING,
        allowNull:true
      },
      hanDungMaDatLaiMatKhau: {
        type: Sequelize.DATE,
        allowNull:true
      },
      idGia: {
        type: Sequelize.INTEGER,
        references:{
          model:"Gias",
          key:"id"
        },
        defaultValue: 1,
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
    await queryInterface.dropTable('Nguoi_dungs');
  }
};