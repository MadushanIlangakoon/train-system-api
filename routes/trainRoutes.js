// routes/trainRoutes.js
const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController');

router.post('/train', trainController.createTrainData);

// GET route to get all train details
router.get('/trains', trainController.getAllTrains);

module.exports = router; 