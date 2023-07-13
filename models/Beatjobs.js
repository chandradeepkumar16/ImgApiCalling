'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Beatjobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Beatjobs.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true
      // ,
      // allowNull: false
    },
    // beatid: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    beatDate: DataTypes.STRING,
    beatTime: DataTypes.STRING,
    beatContactPerson: DataTypes.STRING,
    beatBusinessName: DataTypes.STRING,
    beatPriority: DataTypes.STRING,
    beatPhoneNumber: DataTypes.STRING,
    beatAddress: DataTypes.STRING,
    beatCity: DataTypes.STRING,
    beatState: DataTypes.STRING,
    beatFollowUp: DataTypes.STRING,
    beatXY: DataTypes.STRING,
    beatTodo: DataTypes.STRING,
    beatNotes: DataTypes.STRING,
    beatAssigned: DataTypes.INTEGER,
    beatDateAndTime: DataTypes.STRING,
    beatlastaction:DataTypes.STRING
    // stampedon: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Beatjobs',
  });
  return Beatjobs;
};