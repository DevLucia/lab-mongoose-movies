const Celebrity = require('../models/celebrities.model');
const Movie = require('../models/movies.model');

module.exports.list = (req, res, next) => {
  Movie.find()
    .populate('celebrity')
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
  Promise.all([
    Celebrity.find(),
    Movie.findById(req.params.id)
  ])
  .then((results) => {
    const celebrities = results[0];
    const movie = results[1];
    res.render('movies/new', { movie, celebrities })
  })

}

module.exports.doEdit = (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      movie.set(req.body);
      movie.save()
        .then((movie) => {res.redirect('/movies')})
    })
}

module.exports.get = (req, res, next) => {
  Movie.findById(req.params.id)
    .populate('celebrity')
    .then(movie => {
      Movie.findById(movie.celebrity)
        .then((celebrity) => res.render('movies/show', { movie, celebrity }))
    });
}

module.exports.delete = (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/movies'));
}
