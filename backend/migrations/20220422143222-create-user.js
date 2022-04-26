'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          is: /[A-Z\-]{2,}/gi
        }
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          is: /[A-Z\-]{2,}/gi
          }
      },
      avatar_img: {
        type: Sequelize.STRING,
        defaultValue: 'http://localhost:3000/images/default_img.jpg'
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user');
  }
};