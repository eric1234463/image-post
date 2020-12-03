const mongoose = require('mongoose');

let _postModel = null

class Post {
  static get shareMongooseModel() {
    if (!_postModel) {
      _postModel = mongoose.model('Post', {
        user: { type: 'ObjectId', ref: 'User' },
        media: { type: 'ObjectId', ref: 'Media' },
        description: String,
      })

      return _postModel
    }
    return _postModel
  }

  static async createOne({ userId, description, mediaId }) {
    return Post.shareMongooseModel.create({
      media: mediaId,
      user: userId,
      description
    })
  }
}

module.exports = Post;
