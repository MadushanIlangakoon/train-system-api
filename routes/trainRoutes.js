// routes/trainRoutes.js
const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController');

router.post('/train', trainController.createTrainData);

module.exports = router;
