const db = require('../config/db');

exports.pay = (req, res) => {
  const { parking_log_id, total_fee } = req.body;

  db.query(
    'INSERT INTO payments SET ?',
    { parking_log_id, total_fee, payment_status: 'lunas' },
    () => res.json({ message: 'Pembayaran berhasil' })
  );
};
