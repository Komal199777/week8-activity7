const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    sender: { type: String, required: true },
    message: { type: String, required: true },
    rating: { type: Number, required: true },
  });

  module.exports = mongoose.model('Inventory', inventorySchema);