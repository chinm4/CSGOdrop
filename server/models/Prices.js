const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PricesSchema = new Schema({
  "skinName": {
    type: String
  },
  "avgPrice": {
    type: Number
  },
  "medianPrice": {
    type: Number
  },
  "lowestPrice": {
    type: Number
  },
  "HighestPrice": {
    type: Number
  }
});

module.exports = mongoose.model('post', PriceSchema);