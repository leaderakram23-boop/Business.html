const products = [
  { name: "هاتف سامسونج", price: 500 },
  { name: "حاسوب محمول", price: 900 },
  { name: "سماعات", price: 50 },
  { name: "ساعة ذكية", price: 120 },
  { name: "لوحة مفاتيح", price: 30 }
];

const productsDiv = document.getElementById("products");
const searchInput = document.getElementById("search");

// عرض المنتجات
function displayProducts(items) {
  productsDiv.innerHTML = "";

  items.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h4>${product.name}</h4>
      <p>${product.price}$</p>
    `;
    productsDiv.appendChild(div);
  });
}

// البحث
searchInput.addEventListener("input", function () {
  const value = searchInput.value.toLowerCase();

  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(value)
  );

  displayProducts(filtered);
});

// عرض الكل عند التحميل
displayProducts(products);
