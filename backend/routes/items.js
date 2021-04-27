const { Router } = require("express");
const router = Router();

const Item = require("../models/Item");

//get items
router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

//create new items
router.post("/", async (req, res) => {
  const { artType, article, author, price, created_at } = req.body;
  const imagePath = "/uploads/" + req.file.filename;
  const newItem = new Item({
    artType,
    article,
    author,
    price,
    imagePath,
    created_at,
  });
  await newItem.save();
  res.json({ message: "Item saved on DB" });
});

//delete items
router.delete("/:id", async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Item deleted" });
});

module.exports = router;
