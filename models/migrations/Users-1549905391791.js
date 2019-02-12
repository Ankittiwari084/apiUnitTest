var mongoose = require('mongoose');
var Users = require('../Users.js');


// manipulate your data here
Users.find().exec()
.then(results => {
  console.log(results);
  mongoose.connection.close();
});