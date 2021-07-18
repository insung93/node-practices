const express = require('express');
const authorized = require('./authorized');
const controller = require('../controllers/admin');

const router = express.Router();
router.route('/:menu').get(controller.index);

module.exports = router;
