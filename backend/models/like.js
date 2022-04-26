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
      Like.associate = function (models) {
        models.User.belongsToMany(models.post, {
          through: models.Like,
          foreignKey: 'userid',
          otherKey: 'postId',
        });
    
        models.Post.belongsToMany(models.user, {
          through: models.Like,
          foreignKey: 'postId',
          otherKey: 'userId',
        });
    
        models.Like.belongsTo(models.user, {
          foreignKey: 'userid',
          as: 'user',
        });
    
        models.Like.belongsTo(models.post, {
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