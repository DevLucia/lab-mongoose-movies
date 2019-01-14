const Celebrity = require('../models/celebrities.model');
const Movie = require('../models/movies.model');

module.exports.list = (req, res, next) => {
  Movie.find()
    .then((movies) => res.render('movies/index', { movies }))
    .catch(next);
}

module.exports.create = (req, res, next) => {
  Movie.find()
  .then((movies) => res.render('movies/new', { movie: new Movie(), movies}));
}

module.exports.doCreate = (req, res, next) => {
  const movie = new Movie(req.body);
  movie.save()
    .then(() => { res.redirect('/movies')});
}

module.exports.edit = (req, res, next) => {
  // Promise.all([
  //   User.find(),
  //   Book.findById(req.params.id)
  // ])
 Movie.findById(req.params.id)
  .then((movie) => { res.render('movies/new', { movie })
  .catch(next);
  })
}

module.exports.doEdit = (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      movie.set(req.body);
      movie.save()
        .then((movie) => {res.render('movies/new', { movie })})
    })
}

module.exports.get = (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render('movies/show', { movie })
    });
}

module.exports.delete = (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/movies'));
}
