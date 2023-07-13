'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schemes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Schemes.init({
    type: DataTypes.STRING,
    state: DataTypes.STRING,
    skuid: DataTypes.STRING,
    productname: DataTypes.STRING,
    schemedetails: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Schemes',
  });
  return Schemes;
};