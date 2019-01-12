const Celebrity = require('../models/celebrities.model');
const Movie = require('../models/movies.model');

module.exports.list = (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => res.render('celebrities/index', { celebrities }))
    .catch(next);
}

module.exports.create = (req, res, next) => {
res.render('celebrities/new');
}

module.exports.doCreate = (req, res, next) => {
  console.log("Holita")
  const celebrity = new Celebrity(req.body);
  console.log(celebrity)
  celebrity.save()
    .then(() => { res.redirect('/celebrities')});
}

module.exports.edit = (req, res, next) => {
  // Promise.all([
  //   User.find(),
  //   Book.findById(req.params.id)
  // ])
 celebrities.findById(req.params.id)
  .then((results) => {
    const users = results[0];
    const book = results[1]

    res.render('books/form', { book, users })
  })
}

// module.exports.doEdit = (req, res, next) => {
//   Book.findById(req.params.id)
//     .then((book) => {
//       book.set(req.body);

//       book.save()
//         .then((book) => { res.redirect('/books' )});
//     })
// }

module.exports.get = (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render('celebrities/show', { celebrity })
    });
}

module.exports.delete = (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/celebrities'));
}
