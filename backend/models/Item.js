/* ***************************************************************************************
 *    Title: <Core Version of NODE JS, JAVASCRIPT, and interactive CARDS>
 *    Author: <Jesus Fazt - Fazt Code>
 *    Date: <February 2019>
 *    Code version: <1>
 *    Availability: <https://www.youtube.com/watch?v=Fs1G1BcP4BI&t=252s>
 *
 *************************************************************************************** */

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
