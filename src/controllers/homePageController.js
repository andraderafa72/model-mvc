exports.homePageController = (req, res, next) => {
  res.render('index');
  return;
}

exports.homePagePost = (req, res) => {
  res.send(req.body)
  return;
}