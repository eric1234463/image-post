const express = require('express');
const PublicController = require('../controllers/PublicController');
const router = express.Router();
const isLogin = require('../middlewares/isLogin');
const passportInit = require('../middlewares/passportInit');
const passportSession = require('../middlewares/passportSession');
const sessionStore = require('../middlewares/sessionStore');
const userRoutes = require('./user');

router.use(sessionStore, passportInit, passportSession);

router.all('*',  isLogin, PublicController.show);
router.use(userRoutes);

module.exports = router;
