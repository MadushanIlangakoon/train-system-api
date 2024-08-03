// app.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const trainRoutes = require('./routes/trainRoutes');

const cors = require('cors'); // Import cors

const app = express();

connectDB();
// app.use(cors({ origin: 'http://localhost:3000' })); // Enable CORS for requests from http://localhost:3000
app.use(cors({ origin: true }));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});  

// Use routes
app.use('/api', trainRoutes);

// Export the app
module.exports = app;