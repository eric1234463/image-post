const mongoose = require('mongoose');

let _mediaModel = null

class Media {
  static get shareMongooseModel() {
    if (!_mediaModel) {
      _mediaModel = mongoose.model('Media', {
        user: { type: 'ObjectId', ref: 'User' },
        url: String,
      })

      return _mediaModel
    }
    return _mediaModel
  }

  static async createOne({ image, userId }) {
    return Media.shareMongooseModel.create({
      url: image.filename,
      user: userId,
    })
  }
}

module.exports = Media;
