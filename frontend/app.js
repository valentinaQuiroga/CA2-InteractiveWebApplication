/* ***************************************************************************************
 *    Title: <Core Version of NODE JS, JAVASCRIPT, and interactive CARDS>
 *    Author: <Jesus Fazt - Fazt Code>
 *    Date: <February 2019>
 *    Code version: <1>
 *    Availability: <https://www.youtube.com/watch?v=Fs1G1BcP4BI&t=252s>
 *
 *************************************************************************************** */
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

//id of the form Update
document.getElementById("item-form-update").addEventListener("submit", (e) => {
  const artType = document.getElementById("artTypeUpdate").value;
  const article = document.getElementById("articleUpdate").value;
  const author = document.getElementById("authorUpdate").value;
  const price = document.getElementById("priceUpdate").value;
  const itemID = document.getElementById("idUpdate").value;

  //groupdata to send all together
  const formData = new FormData();
  formData.append("artTypeUpdate", artType);
  formData.append("articleUpdate", article);
  formData.append("authorUpdate", author);
  formData.append("priceUpdate", price);

  //console.log(image[0]);
  const ui = new UI();
  ui.updateItem(itemID, formData);
  ui.renderMessage("Art Updated in the Gallery", "success", 2000);

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

//to Update de card with an item
document.getElementById("items-cards").addEventListener("click", (e) => {
  if (e.target.classList.contains("update")) {
    const ui = new UI();
    const id = e.target.getAttribute("_id");
    ui.getItem(id);
    //ui.renderMessage("Art removed from the Gallery", "danger", 2000);
  }
  e.preventDefault();
});
