const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

let _userModel = null

class User {
  static get shareMongooseModel() {
    if (!_userModel) {
      _userModel = mongoose.model('User', {
        email: String,
        password: String,
      })

      return _userModel
    }
    return _userModel
  }

  static async findOneByEmail(email) {
    return User.shareMongooseModel.findOne({ email });
  }

  static async findOneById(id) {
    return User.shareMongooseModel.findById(id);
  }

  static async createOne({ email, password }) {
    const user = await User.findOneByEmail(email);

    if (user) {
      throw Error('User Already Exist');
    }

    const encryptedPassword = bcrypt.hashSync(
      password,
      bcrypt.genSaltSync(8),
    );

    const newUser = await User.shareMongooseModel.create({
      email,
      password: encryptedPassword,
    });

    return newUser;
  }
}

module.exports = User;
