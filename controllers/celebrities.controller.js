const Celebrity = require('../models/celebrities.model');
const Movie = require('../models/movies.model');

module.exports.list = (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => res.render('celebrities/index', { celebrities }))
    .catch(next);
}

module.exports.create = (req, res, next) => {
  Celebrity.find()
  .then((celebrities) => res.render('celebrities/new', { celebrity: new Celebrity(), celebrities}));
}

module.exports.doCreate = (req, res, next) => {
  const celebrity = new Celebrity(req.body);
  celebrity.save()
    .then(() => { res.redirect('/celebrities')});
}

module.exports.edit = (req, res, next) => {

 Celebrity.findById(req.params.id)
  .then((celebrity) => res.render('celebrities/new', { celebrity }))
  .catch(next);
  
}

module.exports.doEdit = (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((celebrity) => {
      celebrity.set(req.body);
      celebrity.save()
        .then(() => {res.redirect('/celebrities')})
    })
}

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
