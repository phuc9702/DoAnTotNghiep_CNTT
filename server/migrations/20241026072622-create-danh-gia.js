'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Danh_gias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idBai_dang: {
        type: Sequelize.INTEGER,
        references:{
          model:"Bai_dangs",
          key:"id"
        },
      },
      idNguoi_dung: {
        type: Sequelize.INTEGER,
        references:{
          model:"Nguoi_dungs",
          key:"id"
        },
      },
      noiDung: {
        type: Sequelize.TEXT
      },
      soSao: {
        type: Sequelize.INTEGER,
        allowNull:false
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
    await queryInterface.dropTable('Danh_gias');
  }
};