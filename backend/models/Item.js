const { Schema, model } = require("mongoose");

const ItemSchema = new Schema({
  artType: { type: String, required: true },
  article: { type: String, required: true },
  author: { type: String },
  price: { type: Number, required: true },
  onSale: { type: Boolean },
  imagePath: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = model("Item", ItemSchema);
