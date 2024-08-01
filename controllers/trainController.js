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

//i add
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
