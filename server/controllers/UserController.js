const JsonResponse = require('../helpers/jsonResponse')
const renderJson = require('../helpers/renderJson')
const User = require('../models/user');

class UserController {
  static async login(req, res) {
    return renderJson(
      res,
      new JsonResponse(req.user, STATUS_OK),
    );
  }

  static async create(req, res) {
    const user = await User.createOne(req.body.user);

    return req.login(user, () => {
      return renderJson(
        res,
        new JsonResponse(user, STATUS_OK),
      );
    })
  }
}

module.exports = UserController;
