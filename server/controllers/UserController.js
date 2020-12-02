const JsonResponse = require('../helpers/jsonResponse')
const renderJson = require('../helpers/renderJson')
const User = require('../models/user');
const { STATUS_OK, STATUS_CREATED } = require('../constants/Response');

class UserController {
  static async login(req, res) {
    return renderJson(
      res,
      new JsonResponse(req.user.toObject(), STATUS_OK),
    );
  }

  static async create(req, res) {
    const user = await User.createOne(req.body.user);
    return req.login(user, () => {
      return renderJson(
        res,
        new JsonResponse(user, STATUS_CREATED),
      );
    })
  }

  static async logout(req, res) {
    await req.logout();

    return res.redirect('/users/sign_In');
  }
}

module.exports = UserController;
