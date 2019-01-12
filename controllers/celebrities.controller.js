const Celebrity = require('../models/celebrities.model');
const Movie = require('../models/movies.model');

module.exports.list = (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => res.render('celebrities/index', { celebrities }))
    .catch(next);
}

module.exports.create = (req, res, next) => {
  res.render('users/create');
}
module.exports.doCreate = (req, res, next) => {
  const user = new User(req.body);

  user.save()
    .then((user) => { res.redirect('/users' )});
}

module.exports.get = (req, res, next) => {
  User.findById(req.params.id)
    .then(user => res.render('users/detail', { user }));
}

module.exports.delete = (req, res, next) => {
  User.findByIdAndDelete(req.params.id)
    .then(user => res.redirect('/users'));
}