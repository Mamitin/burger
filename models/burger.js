var orm = require("../config/orm");

var burger = {
    selectALL: function (cb) {
        orm.selectALL("burgers", function (res) {
            cb(res);
        });
    }
insertOne: function (cols, vals, cb) {
        orm.selectALL("burgers", cols, vals, function (res) {
            cb(res);
        });
    }
updateOne: function (objColVals, condition, cb) {
        orm.selectALL("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
deleteOne: function (conditon, cb) {
        orm.selectALL("burgers", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;