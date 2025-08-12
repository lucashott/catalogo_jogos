const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/gameController');
const validateGame = require('../middlewares/validateGame');

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getById);
router.post('/', validateGame, ctrl.create);
router.put('/:id', validateGame, ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;
