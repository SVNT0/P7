'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      like.associate = function (models) {
        models.user.belongsToMany(models.post, {
          through: models.like,
          foreignKey: 'userid',
          otherKey: 'postid',
        });
    
        models.post.belongsToMany(models.user, {
          through: models.like,
          foreignKey: 'postid',
          otherKey: 'userid',
        });
    
        models.like.belongsTo(models.user, {
          foreignKey: 'userid',
          as: 'user',
        });
    
        models.like.belongsTo(models.post, {
          foreignKey: 'postid',
          as: 'post',
        });
      };    
      // define association here
    }
  }
  like.init({
    liked: {
      type: DataTypes.INTEGER,
    },
    postid: {
      type: DataTypes.INTEGER,
    },
    userid: {
      type: DataTypes.INTEGER,
    },
    sequelize,
    modelName: 'like',
  });
  return like;
};