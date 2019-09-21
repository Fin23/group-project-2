module.exports = function (sequelize, DataTypes) {
    var Volunteer = sequelize.define("Volunteer", {
        text: DataTypes.STRING,
        description: DataTypes.TEXT
    });
    return Volunteer;
};
