'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Gan_the_bai_dangs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idGan_the: {
        type: Sequelize.INTEGER,
        references:{
          model:"Gan_thes",
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
    await queryInterface.dropTable('Gan_the_bai_dangs');
  }
};