module.exports = function (sequelize, DataTypes) {
    var Volunteer = sequelize.define("Volunteer", {
        firstName: DataTypes.STRING,
        lastName: DataTypes.TEXT,
        email: DataTypes.TEXT,
        phoneNumber: DataTypes.TEXT
    });
    
    return Volunteer; 
        };
