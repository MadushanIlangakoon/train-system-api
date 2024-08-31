// controllers/trainController.js
const Train = require('../models/trainModel');

exports.createTrainData = async (req, res) => {
  console.log(req.body);
  try {
    const newTrainData = new Train(req.body);
    await newTrainData.save();
    res.status(201).json(newTrainData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all train details
exports.getAllTrains = async (req, res) => {
  try {
    const trains = await Train.find();
    res.status(200).json(trains);
  } catch (err) {
    console.error('Error fetching train data:', err.message);
    res.status(500).json({ message: err.message });
  }
};


// Get a specific train by ID
exports.getTrainById = async (req, res) => {
  const engine_id = req.query.engine_id;
  try {
    const train = await Train.find({ engine_id: engine_id });
    if (!train) {
      return res.status(404).json({ message: 'Train not found' });
    }
    res.status(200).json(train);
  } catch (err) {
    console.error('Error fetching specific train:', err.message);
    res.status(400).json({ message: 'Invalid train ID' });
  }
};



// Update a specific train by ID
exports.updateTrain = async (req, res) => {
  const updateData = req.body;
  console.log(updateData._id)
  
  try {
    const train = await Train.findByIdAndUpdate(updateData._id, updateData, { new: true, runValidators: true });
    if (!train) {
      return res.status(404).json({ message: 'Train not found' });
    }
    res.status(200).json(train);
  } catch (err) {
    console.error('Error updating train:', err.message);
    res.status(400).json({ message: err.message });
  }
};



// Delete a specific train by ID
exports.deleteTrain = async (req, res) => {
  const id  = req.body._id;

  try {
    const train = await Train.findByIdAndDelete(id);
    if (!train) {
      return res.status(404).json({ message: 'Train not found' });
    }
    return res.status(200).json({ message: 'Train deleted successfully' });
  } catch (err) {
    console.error('Error deleting train:', err.message);
    return res.status(400).json({ message: err.message });
  }
};



// Search for trains by name or destination
exports.searchTrains = async (req, res) => {
  const searchTerm = req.query.search;
  try {
    const trains = await Train.find({
      $or: [
        { train_name: new RegExp(searchTerm, 'i') },
        { destination: new RegExp(searchTerm, 'i') }
      ]
    });
    res.status(200).json(trains);
  } catch (err) {
    console.error('Error searching for trains:', err.message);
    res.status(400).json({ message: err.message });
  }
};
