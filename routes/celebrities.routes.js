const express = require('express');
const router = express.Router();

const celebritiesController = require('../controllers/celebrities.controller');

router.get('/', celebritiesController.list)

router.get('/new', celebritiesController.create)
router.post('/new', celebritiesController.doCreate)

router.get('/:id/new', celebritiesController.edit)
router.post('/:id/new', celebritiesController.doEdit)

router.get('/:id', celebritiesController.get)
router.post('/:id/delete', celebritiesController.delete)


module.exports = router; 