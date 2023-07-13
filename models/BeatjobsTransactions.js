'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BeatjobsTransactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BeatjobsTransactions.init({
    userId: DataTypes.INTEGER,
    beatPriority: DataTypes.STRING,
    beatTodo: DataTypes.STRING,
    beatNotes: DataTypes.STRING,
    beatFollowUp: DataTypes.STRING,
    beatId:DataTypes.INTEGER,
    beatlastaction:DataTypes.STRING,
    beatXY:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BeatjobsTransactions',
  });
  return BeatjobsTransactions;
};