// routes/trainRoutes.js
const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController');

// POST route to add train details
router.post('/trains', trainController.createTrainData);

// GET route to get all train details
router.get('/trains', trainController.getAllTrains);
// Get a specific train by ID
router.get('/singletrain', trainController.getTrainById);
// Update a specific train by ID
router.put('/trains', trainController.updateTrain); 
// Delete a specific train by ID
router.delete('/trains', trainController.deleteTrain); 
 // Search for trains by name or destination
router.get('/trains/search', trainController.searchTrains); 

// Route to get trains grouped by IDs with only recent data
router.get('/trains/recent', trainController.getTrainsGroupedByIdsWithRecentData);


module.exports = router; 