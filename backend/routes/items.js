const { Router } = require("express");
const router = Router();
const { unlink } = require("fs-extra");
const path = require("path");

const Item = require("../models/Item");

//get items
router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

//get item by id
router.get("/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.json(item);
});

//update item
router.put("/:id", async (req, res) => {
  const { artTypeUpdate, articleUpdate, authorUpdate, priceUpdate } = req.body;

  Item.findByIdAndUpdate(
    { _id: req.params.id },
    {
      artType: artTypeUpdate,
      article: articleUpdate,
      author: authorUpdate,
      price: priceUpdate,
    },
    { new: true },
    function (err, item) {
      if (err) {
        console.log(item);
        res.json({ message: "Error while saving on DB" });
      }
      console.log(item);
      res.json({ message: "Item saved on DB" });
    }
  );
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
  const item = await Item.findByIdAndDelete(req.params.id);
  unlink(path.resolve("./backend/public" + item.imagePath));
  res.json({ message: "Item deleted" });
});

module.exports = router;
