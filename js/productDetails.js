fetch("data/products.json")
  .then((response) => response.json())
  .then((products) => {
    const productList = document.getElementById("product-list");

    products.forEach((product) => {
      const col = document.createElement("div");
      col.className = "col-md-4 mb-4 d-flex";

      const card = document.createElement("div");
      card.className =
        "card shadow rounded-4 w-100 d-flex flex-column justify-content-between";

      card.innerHTML = `
          <img src="${product.image}" class="card-img-top rounded-top-4" alt="${
        product.title
      }" style="height: 200px; object-fit: cover;" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-uppercase">${product.title}</h5>
            <p class="card-text flex-grow-1 text-justify" style="font-size: 0.95rem;">
              ${product.description}
            </p>
            <div class="d-flex justify-content-end">
              <a href="order.html?product=${encodeURIComponent(
                product.title
              )}" class="btn btn-primary mt-2">
                Order Now
              </a>
            </div>
          </div>
        `;

      col.appendChild(card);
      productList.appendChild(col);
    });
  })
  .catch((error) => {
    console.error("Failed to load product data:", error);
    document.getElementById("product-list").innerHTML =
      "<p class='text-danger'>Unable to load products.</p>";
  });
