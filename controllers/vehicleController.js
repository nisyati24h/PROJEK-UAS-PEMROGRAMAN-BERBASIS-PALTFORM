const model = require('../models');

exports.createVehicle = (req, res) => {
  model.createVehicle(req.body, () => {
    res.json({ message: 'Vehicle added' });
  });
};

exports.getVehicles = (req, res) => {
  model.getAllVehicles((err, result) => {
    res.json(result);
  });
};
