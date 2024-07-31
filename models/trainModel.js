// models/trainModel.js
const mongoose = require('mongoose');

const TrainSchema = new mongoose.Schema({
  train_name: { type: String, required: true },
  engin_model: { type: String, required: true },
  engin_id: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  last_station: { type: String, required: true },
  time_stamp: { type: Date, required: true },
  start_location: { type: String, required: true },
  destination: { type: String, required: true },
});

const Train = mongoose.model('Train', TrainSchema);

module.exports = Train;
