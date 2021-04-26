const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/artGallery", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Connected to DATABASE"))
  .catch((err) => console.error(err));
