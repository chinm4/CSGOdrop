const mongoose = require('mongoose');
//const config = require('config');
const db = "mongodb+srv://mchin576:Avatar.888@csgodrop.helovfo.mongodb.net/";

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.log(err.message);
    console.log(err);
  }
}

module.exports = connectDB;