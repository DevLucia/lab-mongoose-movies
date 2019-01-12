const User = require('../models/user.model');

module.exports.list = (req, res, next) => {
  User.find()
    .then((users) => res.render('users/list', { users }));
}

module.exports.create = (req, res, next) => {
  res.render('users/create');
}
//El req.body es lo del body Parser. No hace falta requerirlo, porque ya está hecho en el app.js
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