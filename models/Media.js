'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users}) {
      this.belongsTo(Users, { as: 'Users', foreignKey : 'userid'})
      // define association here
    }
  }
  Media.init({
    userid: DataTypes.INTEGER,
    path: DataTypes.STRING,
    name: DataTypes.STRING,
    uuid: DataTypes.STRING,
    mime_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Media',
  });
  return Media;
};