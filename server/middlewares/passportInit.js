const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/user');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const user = await User.findOneByEmail(email);
      if (!user) {
        return done(null, false, { message: 'Incorrect email' });
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      done(null, user);
    },
  ),
);

passport.serializeUser((user, done) => {
  log('passport', 'trace', {
    message: `serializeUser with userId: ${user._id}`,
  });

  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    log('passport', 'trace', {
      message: `login deserializeUser userId: ${id}`,
    });
    const user = await User.findOneById(email);
    log('passport', 'trace', { message: 'login deserializeUser user', user });
    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = passport.initialize();
