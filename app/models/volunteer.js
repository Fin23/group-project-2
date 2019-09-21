var orm = require("../config/orm.js");

var volunteer = {
    all: function (cb) {
        orm.all("volunteers", function (res) {
            cb(res);
        });
    },
    //variables cols and vals are arrays
    create: function (cols, vals, cb) {
        orm.create("volunteers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("volunteers", objColVals, condition, function (res) {
            cb(res);
        });
    }
};
//export
module.exports = volunteer; 
