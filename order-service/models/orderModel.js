const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  product: String,
  quantity: Number,
  userId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Order', orderSchema);
