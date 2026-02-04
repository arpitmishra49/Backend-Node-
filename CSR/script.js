const container = document.getElementById("product-container");
let allProducts = [];

fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => {
    allProducts = data.products;
    allProducts.forEach(product => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p class="price">$${product.price}</p>
      `;

      card.onclick = () => {
        window.location.href = `product.html?id=${product.id}`;
      };

      container.appendChild(card);
    });
    
  })
  .catch(() => {
    container.innerHTML = "<p>Failed to load products</p>";
  });

