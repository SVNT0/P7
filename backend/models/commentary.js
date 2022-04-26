'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class commentary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.associate = function (models) {
        models.Comment.belongsTo(models.User, {
          onDelete: "cascade",
          foreignKey: 'userId'
        })
      };
      // define association here
    }
  }
  commentary.init({
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    userid: {
      type: DataTypes.INTEGER,
      },
    postid: {
      type: DataTypes.INTEGER
      },
  },
    sequelize,
    modelName: 'commentary',
  });
  return commentary;
};