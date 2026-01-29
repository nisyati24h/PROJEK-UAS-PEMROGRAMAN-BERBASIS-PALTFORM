const db = require('../config/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query(
    'SELECT * FROM users WHERE email = ?',
    [email],
    (err, result) => {
      if (!result.length)
        return res.json({ message: 'User not found' });

      const user = result[0];

      if (!bcrypt.compareSync(password, user.password))
        return res.json({ message: 'Wrong password' });

      const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET
      );

      res.json({ token });
    }
  );
};
