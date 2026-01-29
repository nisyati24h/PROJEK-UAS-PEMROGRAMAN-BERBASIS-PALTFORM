const express = require('express');
const router = express.Router();
const controller = require('../controllers/paymentController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, controller.pay);

module.exports = router;
