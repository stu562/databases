var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      if (!req.body || !req.status) {
        res.status(400).send('No message available')
      } else {
        models.messages.get(function(err, result) {
          if (err) {
            res.status(404).send(err);
          } else {
            res.status(200).json(result);
          }
        })
      }
      // res.status(200).send(models.messages.get());
      console.log('in GET')
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, function(err, result) {
        if (err) {
          console.log(err, 'message error');
          res.send(err);
        } else {
          console.log(req.body);
          res.status(201).send('Success!')
        }
      })
    } // a function which handles posting a message to the database
    // .get('/', function (req, res) {
    //   res.send('hello world')
    // })
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      if (!req.body.username || !req.status) {
        res.status(400).send('No user available')
      } else {
        models.users.get(function(err, result) {
          if (err) {
            res.status(404).send(err);
          } else {
            // console.log('res', result);
            // console.log('request.body', req.body)
            res.status(200).json(result);
          }
        })
      }
    },
    post: function (req, res) {
      models.users.post(req.body.username, function(err, result) {
        if (err) {
          console.log(err, 'user error');
          res.send(err);
        } else {
          // console.log(req.body.username);
          res.status(201).send('Success!')
        }
      })
    }
  }
};

//defines msg and users controllers that the app will use 