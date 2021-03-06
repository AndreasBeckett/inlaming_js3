const mongodb = require('mongoose');

const productSchema = mongodb.Schema({

  name: { type: String, required: true, unique: true },
  short: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },

}) 

module.exports = mongodb.model('Product', productSchema);