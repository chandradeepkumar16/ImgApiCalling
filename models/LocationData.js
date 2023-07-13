'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LocationData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LocationData.init({
    // locationid: DataTypes.INTEGER,
    userid: DataTypes.INTEGER,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    // stampedon: DataTypes.DATE,
    stampdate: DataTypes.STRING,
    stamptime: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LocationData',
  });
  return LocationData;
};