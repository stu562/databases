var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM Messages', function(err, results) {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      })
      //SELECT * FROM Messages
    }, // a function which produces all the messages
    post: function (newMessage, callback) {
      db.query('INSERT INTO Messages set ?', newMessage, function(err, results) {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      })
      //INSERT INTO Messages (text)
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * FROM Users', function(err, results) {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      })
    },
    post: function (newUser, callback) {
      db.query('INSERT INTO Users set ?', newUser, function(err, results) {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      })
    }
  }
};

//defines msg n users the models 
//inserting into messages - roomname and username need to go into Rooms and Users and ids in Messages need to update accordinfgly
//http://www.rndblog.com/insert-into-multiple-mysql-tables-linked-by-a-foreign-key/