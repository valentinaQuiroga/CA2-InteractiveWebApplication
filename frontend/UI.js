//INTERFACE for the ItemServer functions
import ItemService from "./services/ItemService";
const itemService = new ItemService();

import { format } from "timeago.js";

class UI {
  async renderItems() {
    const items = await itemService.getItems();
    const itemsCardContainer = document.getElementById("items-cards");
    itemsCardContainer.innerHTML = "";
    items.forEach((item) => {
      const div = document.createElement("div");
      div.className = "";
      div.innerHTML = `
      <div class="card m-2">
        <div class="row">
            <div class="col-md-4">
                <img src="http://localhost:3000${
                  item.imagePath
                }" class="img-fluid" alt="">
            </div>
            <div class="col-md-8">
                <div class="card-block px-2">
                <p class="card-text">${item.artType}</p>
                    <h4 class="card-title">${item.article}</h4>
                    <p class="card-text">${item.author}</p>
                    <p class="card-text">‎€ ${item.price}.00</p>
                    
                    <a href="#" class="btn btn-danger delete" _id="${
                      item._id
                    }">X</a>
                </div>
            </div>
        </div>
        <div class="card-footer w-100 text-muted">
          ${format(item.created_at)}
        </div>
      </div>


      <div class="card mb-3">
  <img src="http://localhost:3000${item.imagePath}" class="img-fluid" alt="">
  <div class="card-body">
    <p class="card-text">${item.artType}</p>
                    <h5 class="card-title">${item.article}</h5>
                    <p class="card-text">${item.author}</p>
                    <p class="card-text">‎€ ${item.price}.00</p>
  </div>
</div>




      `;
      itemsCardContainer.appendChild(div);
    });
  }

  async addNewItem(item) {
    await itemService.postItem(item);
    this.clearItemForm();
    this.renderItems();
  }

  clearItemForm() {
    document.getElementById("item-form").reset();
  }

  renderMessage(message, colorMessage, secondsToRemove) {
    const div = document.createElement("div");
    div.className = `message alert alert-${colorMessage}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".containerMessage");
    const itemForm = document.querySelector("#item-form");

    container.insertBefore(div, itemForm);
    setTimeout(() => {
      document.querySelector(".message").remove();
    }, secondsToRemove);
  }

  async deleteItem(itemId) {
    await itemService.deleteItem(itemId);
    this.renderItems();
  }
}

export default UI;
