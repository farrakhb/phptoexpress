var posts = [{
  id: 0,
  title: "Book 1",
  body: "This is the first post"
},
{
    id: 1,
    title: "Book 2",
    body: "This is the second post"
},
{
    id: 2,
    title: "Book 3",
    body: "This is the third post"
}];

// INDEX

function indexPost(req, res) {
  res.render("posts/index", {
    title: "Posts",
    post: post
  });
}

// SHOW
function showPost(req, res) {
  var post = posts[req.params.id];
  res.render("posts/show", {
    title: "Posts",
    post: post
  });
}

// CREATE
function createPost(req, res) {
  res.send("CREATE");
}

// NEW
function newPost(req, res) {
  res.send("NEW");
}

// UPDATE
function updatePost(req, res) {
  res.send("UPDATE:" + req.params.id);
}

// DELETE
function deletePost(req, res) {
  res.send("DELETE:" + req.params.id);
}

// EDIT
function editPost(req, res) {
  res.send("EDIT:" + req.params.id);
}

module.exports = {
  index: indexPost,
  show: showPost,
  new: newPost,
  create: createPost,
  edit: editPost,
  update: updatePost,
  delete: deletePost
};



















