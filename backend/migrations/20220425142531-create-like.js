'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('like', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      liked: {
        type: Sequelize.INTEGER
      },
      postid: {
        type: Sequelize.INTEGER
      },
      userid: {
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('like');
  }
};