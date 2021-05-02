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

  async getItem(itemId) {
    const res = await fetch(`${this.URI}/${itemId}`);
    // convert the String response to json
    const item = await res.json();
    return item;
  }

  async putItem(itemId, item) {
    const res = await fetch(`${this.URI}/${itemId}`, {
      method: "PUT",
      body: item,
    });
    const data = await res.json();
    console.log(item);
  }

  async postItem(item) {
    const res = await fetch(this.URI, {
      method: "POST",
      body: item,
    });
    const data = await res.json();
    console.log(item);
  }

  async deleteItem(itemId) {
    const res = await fetch(`${this.URI}/${itemId}`, {
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
