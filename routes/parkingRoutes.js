const express = require('express');
const router = express.Router();
const controller = require('../controllers/parkingController');
const auth = require('../middleware/authMiddleware');

router.post('/entry', auth, controller.parkingEntry);
router.put('/exit/:id', auth, controller.parkingExit);
router.get('/', auth, controller.getParkingLogs);

module.exports = router;
