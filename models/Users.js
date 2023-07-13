'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true
    },
    userid: DataTypes.INTEGER,
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    userpwd: DataTypes.STRING,
    useremail: DataTypes.STRING,
    userpic: DataTypes.STRING,
    userstate: DataTypes.STRING,
    usercity: DataTypes.STRING,
    userregion: DataTypes.STRING,
    mgruserid: DataTypes.INTEGER,
    usercategory: DataTypes.INTEGER,
    usertarget: DataTypes.INTEGER,
    usersales: DataTypes.INTEGER,
    userrank: DataTypes.INTEGER,
    userstatus: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};