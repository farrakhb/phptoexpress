var data = require('../data/people.json');

// INDEX

function indexPost(req, res) {
  res.render("posts/index", {
    people: data
  });
}

// EDIT
function editPost(req, res) {
  data = processData(req.body);
  res.sendStatus(200);
}

function processData(data) {
  var newData = [];
  for (var i = 0; i < data.firstname.length; i++) {
    var obj = { "firstname" : data.firstname[i], "surname" : data.surname [i] };
    newData.push(obj);
  }
  return newData;
}

module.exports = {
  index: indexPost,
  edit: editPost
};
