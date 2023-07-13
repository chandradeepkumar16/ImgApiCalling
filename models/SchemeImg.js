'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SchemeImg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SchemeImg.init({
    state: DataTypes.STRING,
    pic1: DataTypes.STRING,
    pic2: DataTypes.STRING,
    pic3: DataTypes.STRING,
    pic4: DataTypes.STRING,
    pic5: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SchemeImg',
  });
  return SchemeImg;
};