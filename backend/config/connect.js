// connect.js
require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.MONGO_URL;
// 'mongodb+srv://NourishNet:NourishNet@nourishnet.wkedfn7.mongodb.net/?retryWrites=true&w=majority';
// const uri ='mongodb://127.0.0.1:27017/NN';
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
