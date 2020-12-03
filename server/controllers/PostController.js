const JsonResponse = require('../helpers/jsonResponse')
const renderJson = require('../helpers/renderJson')
const PostService = require('../services/postService');
const Post = require('../models/post');
const { STATUS_OK, STATUS_CREATED } = require('../constants/Response');

class PostController {
  static async index(req, res) {
    const posts = await Post.shareMongooseModel.find({ user: req.user._id }).populate('media').limit(24);

    return renderJson(
      res,
      new JsonResponse(posts, STATUS_OK),
    );
  }

  static async create(req, res) {
    const post = await PostService.createOne({
      ...req.body,
      userId: req.user._id,
      image: req.file,
    });

    return renderJson(
      res,
      new JsonResponse(post.toObject(), STATUS_CREATED),
    );
  }

}

module.exports = PostController;
