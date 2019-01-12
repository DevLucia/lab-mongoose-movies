const Celebrity = require('../models/celebrities.model');
const Movie = require('../models/movies.model');

module.exports.list = (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => res.render('celebrities/index', { celebrities }))
    .catch(next);
}

module.exports.create = (req, res, next) => {
  User.find()
    .then((users) => res.render('books/form', { book: new Book(), users }));
}

module.exports.doCreate = (req, res, next) => {
  const book = new Book(req.body);

  book.save()
    .then((book) => { res.redirect('/books' )});
}

module.exports.edit = (req, res, next) => {
  Promise.all([
    User.find(),
    Book.findById(req.params.id)
  ])
  .then((results) => {
    const users = results[0];
    const book = results[1]

    res.render('books/form', { book, users })
  })
}

module.exports.doEdit = (req, res, next) => {
  Book.findById(req.params.id)
    .then((book) => {
      book.set(req.body);

      book.save()
        .then((book) => { res.redirect('/books' )});
    })
}

module.exports.get = (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {

      res.render('celebrity/show', { celebrity }))
    });
}

// module.exports.delete = (req, res, next) => {
//   Book.findByIdAndDelete(req.params.id)
//     .then(() => res.redirect('/books'));
// }
