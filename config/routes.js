var express = require("express");

var router = express.Router();

var postsController = require('../controllers/posts');

// add routes here

router.route("/")
  .get(postsController.index)
  .post(postsController.edit);

module.exports = router;
