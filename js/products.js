fetch("data/products.json")
  .then((response) => response.json())
  .then((products) => {
    const productList = document.getElementById("product-list");

    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "card m-2 center";
      card.style.width = "17rem";
      card.innerHTML = `
        <a href="product.html" style="text-decoration: none; color: inherit;">
          <img src="${
            product.image
          }" height="200px" class="card-img-top" alt="${product.title}" />
          <div class="card-body">
            <h5 class="card-text">${product.title.toUpperCase()}</h5>
          </div>
        </a>
      `;
      productList.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Failed to load product data:", error);
    document.getElementById("product-list").innerHTML =
      "<p>Unable to load products.</p>";
  });
