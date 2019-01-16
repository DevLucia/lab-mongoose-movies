const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/movies.controller');

router.get('/', moviesController.list)
router.get('/new', moviesController.create)

router.post('/new', moviesController.doCreate)

router.get('/:id/new', moviesController.edit)
router.post('/:id/new', moviesController.doEdit)

router.get('/:id', moviesController.get)
router.post('/:id/delete', moviesController.delete)


module.exports = router;