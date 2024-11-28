'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Danh_sach_yeu_thichs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idNguoi_dung: {
        type: Sequelize.INTEGER,
        references:{
          model:"Nguoi_dungs",
          key:"id",
        }
      },
      idBai_dang: {
        type: Sequelize.INTEGER,
        references:{
          model:"Bai_dangs",
          key:"id",
        }
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
    await queryInterface.dropTable('Danh_sach_yeu_thichs');
  }
};