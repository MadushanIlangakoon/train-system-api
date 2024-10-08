// models/trainModel.js
const mongoose = require('mongoose');

const TrainSchema = new mongoose.Schema({
  train_name: { 
    type: String, 
    required: false 
  },
  engine_model: { 
    type: String, 
    required: false 
  },
  engine_id: { 
    type: String, 
    required: true 
  },
  latitude: { 
    type: Number, 
    required: false 
  },
  longitude: { 
    type: Number, 
    required: false 
  },
  last_station: { 
    type: String, 
    required: false 
  },
  time_stamp: { 
    type: String, 
    required: false 
  },
  start_location: { 
    type: String, 
    required: false 
  },
  destination: { 
    type: String, 
    required: false 
  }
});

const Train = mongoose.model('train', TrainSchema);

module.exports = Train;
