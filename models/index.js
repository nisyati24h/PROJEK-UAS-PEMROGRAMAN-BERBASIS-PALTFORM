const db = require('../config/db');

module.exports = {
  // ===== USERS =====
  getUserByEmail(email, callback) {
    db.query(
      'SELECT * FROM users WHERE email = ?',
      [email],
      callback
    );
  },

  getAllUsers(callback) {
    db.query(
      'SELECT id, name, email, role FROM users',
      callback
    );
  },

  // ===== VEHICLES =====
  createVehicle(data, callback) {
    db.query(
      'INSERT INTO vehicles SET ?',
      data,
      callback
    );
  },

  getAllVehicles(callback) {
    db.query(
      'SELECT * FROM vehicles',
      callback
    );
  },

  // ===== PARKING LOGS =====
  parkingEntry(vehicle_id, user_id, callback) {
    db.query(
      `INSERT INTO parking_logs 
       (vehicle_id, user_id, entry_time, status) 
       VALUES (?, ?, NOW(), 'parkir')`,
      [vehicle_id, user_id],
      callback
    );
  },

  parkingExit(id, callback) {
    db.query(
      `UPDATE parking_logs 
       SET exit_time = NOW(), status = 'selesai' 
       WHERE id = ?`,
      [id],
      callback
    );
  },

  getAllParkingLogs(callback) {
    db.query(
      'SELECT * FROM parking_logs',
      callback
    );
  },

  // ===== PAYMENTS =====
  createPayment(data, callback) {
    db.query(
      'INSERT INTO payments SET ?',
      data,
      callback
    );
  }
};
