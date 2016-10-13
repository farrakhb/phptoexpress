var data = require('../data/people.json');

// INDEX

function indexPost(req, res) {
  res.render("posts/index", {
    people: data
  });
}

// EDIT
function editPost(req, res) {
  res.send("EDIT:" + req.params.id);
}

module.exports = {
  index: indexPost,
  edit: editPost
};
