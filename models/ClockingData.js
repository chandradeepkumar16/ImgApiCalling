'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClockingData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ClockingData.init({
    // clockid: DataTypes.INTEGER,
    userid: DataTypes.INTEGER,
    activitytype: DataTypes.STRING,
    // stampedon: DataTypes.DATE,
    clockdate: DataTypes.STRING,
    clocktime: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ClockingData',
  });
  return ClockingData;
};