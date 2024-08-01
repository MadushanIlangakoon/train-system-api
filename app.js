// app.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const trainRoutes = require('./routes/trainRoutes');

const app = express();


// Database connection
const dbUrl = process.env.DATABASE;
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});  
// Use routes
// Use routes
app.use('/api', trainRoutes);

// Export the app
module.exports = app;
