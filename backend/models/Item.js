const { Schema, model } = require("mongoose");

const ItemSchema = new Schema({
  artType: { type: String, required: true },
  article: { type: String, required: true },
  author: { type: String },
  price: { type: Number },
  onSale: { type: Boolean },
  imagePath: { type: String },
  created_at: { type: Date, default: Date.now },
});

module.exports = model("Item", ItemSchema);
