import "./styles/app.css";

import UI from "./UI";

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

  //no reboot on submit
  e.preventDefault();
});
