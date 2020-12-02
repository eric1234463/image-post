const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

class User {
  static shareMongooseModel () {
    return mongoose.model('User', {
      email: String,
      password: String,
    })
  }

  static async findOneByEmail(email) {
    return this.shareMongooseModel.findOne({ email });
  }

  static async findOneById(id) {
    return this.shareMongooseModel.findById(id);
  }

  static async createOne({ email, password }) {
    const user = await this.findOneByEmail(email);

    if (user) {
      throw Error('User Already Exist');
    }

    const encryptedPassword = bcrypt.hashSync(
      password,
      bcrypt.genSaltSync(8),
    );

    const user = await this.shareMongooseModel.create({
      email,
      password: encryptedPassword,
    });

    return user ;
  }
}

mongoose.export = User;
