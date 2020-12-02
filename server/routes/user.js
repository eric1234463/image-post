const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();
const passportEmailAuthenticate = require('../middlewares/passportEmailAuthenticate');

router.post('/login',  passportEmailAuthenticate, UserController.login);
router.post('/', UserController.create);

module.exports = router
