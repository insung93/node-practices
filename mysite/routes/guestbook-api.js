const express = require('express');
const controller = require('../controllers/guestbook-api');

const router = express.Router();

router.route('/:sno').get(controller.read);
router.route('/:no').delete(controller.delete);
router.route('').post(controller.create);

module.exports = router;