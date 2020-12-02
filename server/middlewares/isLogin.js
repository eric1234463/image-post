module.exports = async (req, res, next) => {
  if (req.isAuthenticated() && req.url.match(/sign_up|sign_in/)) {
    return res.redirect(`/${req.user._id}/posts`);
  }

  if (req.isAuthenticated()) {
    return next();
  }

  if (req.url.match(/sign_up|sign_in/) && req.method === 'GET') {
    return next();
  }

  return res.redirect(`/users/sign_in`);
};
