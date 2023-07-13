'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brain extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Brain.init({
    userid: DataTypes.INTEGER,
    personname: DataTypes.STRING,
    businessname: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    emailaddress: DataTypes.STRING,
    facebookid: DataTypes.STRING,
    instagramid: DataTypes.STRING,
    twitterid: DataTypes.STRING,
    linkedinid: DataTypes.STRING,
    otherid: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    ledbulbs: DataTypes.BOOLEAN,
    highwattagehammerbulbs: DataTypes.BOOLEAN,
    panellights: DataTypes.BOOLEAN,
    emergencyinverterbulbs: DataTypes.BOOLEAN,
    streetandfloodlights: DataTypes.BOOLEAN,
    smartlightning: DataTypes.BOOLEAN,
    solarproducts: DataTypes.BOOLEAN,
    specialproducts: DataTypes.BOOLEAN,
    electricalaccessories: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Brain',
  });
  return Brain;
};