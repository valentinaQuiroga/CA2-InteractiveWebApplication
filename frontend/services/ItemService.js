class ItemService {
  constructor() {
    this.URI = "http://localhost:3000/api/items";
  }

  async getItems() {
    const res = await fetch(this.URI);
    // convert the String response to json
    const items = await res.json();
    return items;
  }

  async postItem(item) {
    const res = await fetch(this.URI, {
      method: "POST",
      body: item,
    });
    const data = await res.json();
    console.log(data);
  }

  async deleteItem(itemId) {
    const res = await fetch("${this.URI}/${itemId}", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
  }
}

export default ItemService;
