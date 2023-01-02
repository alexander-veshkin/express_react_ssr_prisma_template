'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
    }
  }
  Post.init(
    {
      body: { type: DataTypes.TEXT, allowNull: false },
      title: DataTypes.TEXT,
      date: DataTypes.DATE,
      user_id: { type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: 'Post',
    }
  );
  return Post;
};
