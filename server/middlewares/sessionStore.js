const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const Redis = require('ioredis');

module.exports = (req, res, next) => {
  const client = new Redis({
    host: process.env.SESSION_REDIS_HOST,
    port: process.env.SESSION_REDIS_PORT,
  });

  return session({
    store: new RedisStore({ client }),
    secret: process.env.SESSION_REDIS_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: parseInt(process.env.SESSION_EXPIRY, 10),
    },
  })(req, res, next);
};
