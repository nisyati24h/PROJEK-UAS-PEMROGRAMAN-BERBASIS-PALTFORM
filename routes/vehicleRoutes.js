const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const vehicle = require('../controllers/vehicleController');

router.post('/', auth, vehicle.createVehicle);
router.get('/', auth, vehicle.getVehicles);

module.exports = router;
