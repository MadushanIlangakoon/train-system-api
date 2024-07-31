// controllers/trainController.js
const Train = require('../models/trainModel');

exports.createTrainData = async (req, res) => {
  try {
    const newTrainData = new Train(req.body);
    await newTrainData.save();
    res.status(201).json(newTrainData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
