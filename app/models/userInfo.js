module.exports = function (sequelize, DataTypes) {
    var userInfo = sequelize.define("userInfo", {
        firstName: DataTypes.TEXT,
        lastName: DataTypes.TEXT,
        email: DataTypes.TEXT,
        phoneNumber: DataTypes.INTEGER       
   });  
    return userInfo;
 }
