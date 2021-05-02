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
                <img src="${item.imagePath}" class="img-fluid" alt="">
            </div>
            <div class="col-md-8">
                <div class="card-block px-2">
                <p class="card-text">${item.artType}</p>
                    <h4 class="card-title">${item.article}</h4>
                    <p class="card-text">${item.author}</p>
                    <p class="card-text">‎€ ${item.price}.00</p>
                     <a href="#" class="btn btn-outline-warning update" data-toggle="modal" data-target="#updateModal" _id="${
                       item._id
                     }">Edit</a>                    
                    <a href="#" class="btn btn-outline-danger delete" _id="${
                      item._id
                    }">Delete</a>
                   
                </div>
            </div>
        </div>
        <div class="card-footer w-100 text-muted text-bottom-cd">
          ${format(item.created_at)}
        </div>
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

  async updateItem(itemId, item) {
    await itemService.putItem(itemId, item);
    document.getElementById("updateModal").click();
    this.renderItems();
  }

  async getItem(item) {
    await itemService.getItem(item).then((item) => {
      document.getElementById("artTypeUpdate").value = item.artType;
      document.getElementById("articleUpdate").value = item.article;
      document.getElementById("authorUpdate").value = item.author;
      document.getElementById("priceUpdate").value = item.price;
      document.getElementById("idUpdate").value = item._id;
    });
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
