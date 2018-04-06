var connection = require("./connection.js");

var tableName = "allcharacters";

var orm = {
  
    selectAll: function(tableName, callback) {
        var s = "SELECT * FROM " + tableName;

        connection.query(s, function(err, result) {
        callback(result);
        });
    },


    insertOne: function(tableName, val, callback) {
        var s = "INSERT INTO " + tableName + "(burger_name) VALUES (?)";

        connection.query(s, function(err,result) {
            callback(result);
        });
    },

    updateOne: function(tableName, condition, callback) {
        var s = "UPDATE " + tableName + " SET devoured=true WHERE id=?";
    
        connection.query(s, function(err, result) {
          callback(result);
        });
      }
};

module.exports = orm;