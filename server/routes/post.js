const express = require('express');
const PostController = require('../controllers/PostController');
const router = express.Router();
const multer  = require('multer')
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../public/images'))
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({ storage })


router.get('/me',  PostController.index);
router.post('/', upload.single('image'), PostController.create);

module.exports = router
