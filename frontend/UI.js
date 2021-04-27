import ItemService from "./services/ItemService";
const itemService = new ItemService();

class UI {
  async renderItems() {
    const items = await itemService.getItems();
    console.log(items);
  }

  async addNewItem(item) {
    await itemService.postItem(item);
    this.clearItemForm();
  }

  clearItemForm() {
    document.getElementById("item-form").reset();
  }

  renderMessage() {}

  deleteItem() {}
}

export default UI;
