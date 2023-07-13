'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdsMedia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AdsMedia.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    filter: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AdsMedia',
  });
  return AdsMedia;
};