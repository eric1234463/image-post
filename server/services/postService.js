
const Media = require('../models/media');
const Post = require('../models/post');

class PostService {
  static async createOne({ userId, description, image }) {
    if (image) {
      const media = await Media.createOne({
        userId,
        image,
      })

      const post = await Post.createOne({
        userId,
        description,
        mediaId: media._id,
      })

      return post;
    }

    const post = await Post.createOne({
      userId,
      description,
    })

    return post;
  }
}

module.exports = PostService;
