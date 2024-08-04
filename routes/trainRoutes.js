// routes/trainRoutes.js
const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController');

// POST route to get all train details
router.post('/trains', trainController.createTrainData);

// GET route to get all train details
router.get('/trains', trainController.getAllTrains);

module.exports = router; 