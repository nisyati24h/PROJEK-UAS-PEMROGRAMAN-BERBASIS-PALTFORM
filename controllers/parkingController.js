const db = require('../config/db');

exports.parkingEntry = (req, res) => {
  const { vehicle_id } = req.body;
  db.query(
    'INSERT INTO parking_logs (vehicle_id,user_id,entry_time,status) VALUES (?,?,NOW(),"parkir")',
    [vehicle_id, req.user.id],
    () => res.json({ message: 'Kendaraan masuk' })
  );
};

exports.parkingExit = (req, res) => {
  const { id } = req.params;
  db.query(
    'UPDATE parking_logs SET exit_time=NOW(), status="selesai" WHERE id=?',
    [id],
    () => res.json({ message: 'Kendaraan keluar' })
  );
};

exports.getParkingLogs = (req, res) => {
  db.query('SELECT * FROM parking_logs', (err, result) => {
    res.json(result);
  });
};

exports.getParkingHistory = (req, res) => {
  const model = require('../models');

  model.getParkingHistory((err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
 });
};