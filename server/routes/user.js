const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();
const passportEmailAuthenticate = require('../middlewares/passportEmailAuthenticate');

router.use('/users/login',  passportEmailAuthenticate, UserController.login);

module.exports = router
