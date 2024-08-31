// app.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const trainRoutes = require('./routes/trainRoutes');

const cors = require('cors'); // Import cors

const app = express();

connectDB();


const verifyApiKey = (req, res, next) => {
  // const token = req.headers['authorization']?.split(' ')[1];
  const token = req.headers['authorization'];
  const publicKey = process.env.PRIV_KEY;

  if (!token) {
    return res.status(403).json({ error: 'Forbidden: No token provided' });
  }

  // try {
  //   const decoded = jwt.verify(token, publicKey, { algorithms: ['RSA256'] });
  //   req.user = decoded;
  //   next();
  // } catch (error) {
  //   return res.status(403).json({ error: 'Forbidden: Invalid token' });
  // }
  try {
    if (token !== process.env.API_SIMPLE_KEY) {
      return res.status(403).json({ error: 'Forbidden: Invalid API key' });
    }
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Forbidden: Invalid token' });
  }
  
};

// app.use(cors({ origin: 'http://localhost:3000' })); // Enable CORS for requests from http://localhost:3000
app.use(cors({ origin: true }));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('This software is made by Madushan Ilangakoon');
});  

// Use routes
app.use('/api', verifyApiKey, trainRoutes);

// Export the app
module.exports = app;