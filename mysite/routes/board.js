const express = require('express');
const controller = require('../controllers/board');

const router = express.Router();
router.route('').get(controller.index);
router.route('/view/:no').get(controller.view);
router.route('/modify/:no').get(controller.modify);
router.route('/modify/:no').post(controller._modify);

router.route('/write').get(controller.write);
router.route('/write').post(controller._write);

module.exports = router;