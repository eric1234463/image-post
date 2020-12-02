const express = require('express');
const PublicController = require('../controllers/PublicController');
const UserController = require('../controllers/UserController');
const router = express.Router();
const isLogin = require('../middlewares/isLogin');
const passportInit = require('../middlewares/passportInit');
const passportSession = require('../middlewares/passportSession');
const sessionStore = require('../middlewares/sessionStore');
const userRoutes = require('./user');

router.use(sessionStore, passportInit, passportSession);

router.use('/api/users', userRoutes);
router.get('/logout', UserController.logout);

router.all('*',  isLogin, PublicController.show);

module.exports = router;
