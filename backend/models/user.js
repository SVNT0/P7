'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.associate = function (models) {
        models.User.hasMany(models.post, {
          foreignKeys: {
            allowNull: false,
          }
        });
      };
      // define association here
      User.addScope('nopassword', {
        attributes: { exclude: ['password'] }
      });
    }
  }
  user.init({
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /[A-Z\-]{2,}/gi
      },
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /[A-Z\-]{2,}/gi
      },
    },
    avatar_img: {
      type: DataTypes.STRING,
      defaultValue: 'http://localhost:3000/images/default_img.jpg'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
  },
    sequelize,
    modelName: 'user',
  });
  return user;
};