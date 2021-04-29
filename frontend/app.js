import "./styles/app.css";
import "./src/static/logo-dark.png";

import UI from "./UI";

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  ui.renderItems();
});

//id of the form
document.getElementById("item-form").addEventListener("submit", (e) => {
  const artType = document.getElementById("artType").value;
  const article = document.getElementById("article").value;
  const author = document.getElementById("author").value;
  const price = document.getElementById("price").value;
  const image = document.getElementById("image").files;

  //groupdata to send all together
  const formData = new FormData();
  formData.append("image", image[0]);
  formData.append("artType", artType);
  formData.append("article", article);
  formData.append("author", author);
  formData.append("price", price);

  const ui = new UI();
  ui.addNewItem(formData);
  ui.renderMessage("New Art Added to the Gallery", "success", 2000);

  //no reboot on submit
  e.preventDefault();
});

//to delete de card with an item
document.getElementById("items-cards").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const ui = new UI();
    const id = e.target.getAttribute("_id");
    ui.deleteItem(id);
    ui.renderMessage("Art removed from the Gallery", "danger", 2000);
  }
  e.preventDefault();
});
