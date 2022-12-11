let productBtn = document.getElementById("product-btn");
let productContainer = document.getElementById("product-container");
let productId = document.getElementById("product-id");

let data = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];
// drawUi
function drawUi(item) {
  productContainer.textContent = "";
  item.forEach(function (ele) {
    productContainer.innerHTML += `<div>${ele.name} &nbsp &nbsp
    <button onclick = "deleteitem(${ele.id})">Delete</button>
    </div>
    <br> `;
  });
}
window.onload = drawUi(data);
//add product
productBtn.addEventListener("click", addproduct);
function addproduct() {
  if (productId.value == "") {
    alert(" Please Enter Data ");
    `<button  display= " none" onclick = "deleteitem(${addedItem.id})">Delete</button`;
  }
  // determine last id
  let lastId = data.length ? data[data.length - 1].id : 0;
  data.push({ id: ++lastId, name: productId.value });
  let addedItem = data[data.length - 1];
  productContainer.style.display = "block";
  productContainer.innerHTML += `<div>${addedItem.name} &nbsp &nbsp<button onclick = "deleteitem(${addedItem.id})">Delete</button></div><br>`;
  productId.value = "";
}

function deleteitem(id) {
  let index = data
    .map(function (i) {
      return i.id;
    })
    .indexOf(id);
  if (index != -1) {
    data.splice(index, 1);
  }
  drawUi(data);
  if (data.length == 0) {
    productContainer.style.display = "none";
  }
}
