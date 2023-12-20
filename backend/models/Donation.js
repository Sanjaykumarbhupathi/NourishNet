const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  foodType: {
    type: String,
  },
  foodName: {
    type: String,
  },
  donorID: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  cookingDateTime: { // Updated field name
    type: Date,
  },
  expiryDateTime: { // Updated field name
    type: Date,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  message: {
    type: String,
  },
  assignedTo: {
    type: String,
  },
  status: {
    type: String,
    enum: ['accepted', 'rejected', 'pending', 'assigned', 'collected','distributed'],
    default: 'pending',
  },
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
