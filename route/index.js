const express  =  require('express');
const  router = express.Router();
const user = require('../controller/user');

// set api route
router.post('/createUser',user.createUser);

module.exports = router;