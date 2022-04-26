'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.associate = function (models) {
        models.Post.belongsTo(models.user, {
          onDelete: "cascade",
          foreignerKey: {
            name: 'userid',
            allowNull: false
          }
        });
        models.Post.hasMany(models.like, {
          foreignKey: 'postid',
        })
        models.Post.hasMany(models.commentary, {
          foreignKey: 'postid',
        })
      };
    
      Post.addScope('formatted_date', {
        attributes: {
          include: [[sequelize.fn('date_format', sequelize.col('date_publication'), '%Y-%m-%d %H:%i'), 'formatted_date']]
        }
      });
      // define association here
    }
  }
  post.init({
    url_image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    date_publication: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    dislikes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};