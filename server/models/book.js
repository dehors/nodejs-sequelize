'use strict';
module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define('Book', {
    name: DataTypes.STRING,
    isbn: DataTypes.INTEGER,
    publication: DataTypes.DATE,
    description: DataTypes.TEXT,
    author_id: DataTypes.INTEGER
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Book;
};