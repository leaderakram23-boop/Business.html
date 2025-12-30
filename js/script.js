let products = [];

const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const addBtn = document.getElementById("addBtn");
const productsDiv = document.getElementById("products");
const searchInput = document.getElementById("search");
const searchResults = document.getElementById("searchResults");

function displayProducts() {
  productsDiv.innerHTML = "";
  products.forEach((product, index) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <span>${product.name} - ${product.price}$</span>
      <div>
        <button onclick="editProduct(${index})">تعديل</button>
        <button onclick="deleteProduct(${index})">حذف</button>
      </div>
    `;
    productsDiv.appendChild(div);
  });
}

addBtn.addEventListener("click", () => {
  const name = productName.value.trim();
  const price = parseFloat(productPrice.value);
  if(name && !isNaN(price)){
    products.push({name, price});
    productName.value = "";
    productPrice.value = "";
    displayProducts();
    displaySearchResults();
  } else {
    alert("الرجاء إدخال اسم وسعر صالح");
  }
});

function deleteProduct(index) {
  products.splice(index, 1);
  displayProducts();
  displaySearchResults();
}

function editProduct(index) {
  const newName = prompt("اسم المنتج الجديد:", products[index].name);
  const newPrice = parseFloat(prompt("السعر الجديد:", products[index].price));
  if(newName && !isNaN(newPrice)){
    products[index] = {name: newName, price: newPrice};
    displayProducts();
    displaySearchResults();
  }
}

function displaySearchResults() {
  const value = searchInput.value.toLowerCase();
  const filtered = products.filter(product => product.name.toLowerCase().includes(value));

  searchResults.innerHTML = "";
  filtered.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<span>${product.name} - ${product.price}$</span>`;
    searchResults.appendChild(div);
  });
}

searchInput.addEventListener("input", displaySearchResults);

displayProducts();
displaySearchResults();
