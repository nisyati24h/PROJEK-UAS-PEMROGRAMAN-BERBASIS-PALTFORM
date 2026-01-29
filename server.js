require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.use('/auth', require('./routes/authRoutes'));
app.use('/parking', require('./routes/parkingRoutes'));
app.use('/users', require('./routes/userRoutes'));
app.use('/payments', require('./routes/paymentRoutes'));

app.listen(3000, () => {
  console.log('Server running http://localhost:3000');
});
