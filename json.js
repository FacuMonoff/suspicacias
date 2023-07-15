const products = [
    {
        image: "img/jugueteyfondo1.png",
        name: "Producto 1",
        price: "$10.00",

    },
    {
        image: "img/jugueteyfondo2.png",
        name: "Producto 2",
        price: "$15.00",

    },
    {
        image: "img/jugueteyfondo1.png",
        name: "Producto 3",
        price: "$15.00",

    },
    {
        image: "img/jugueteyfondo2.png",
        name: "Producto 3",
        price: "$15.00",

    },
    {
        image: "img/jugueteyfondo1.png",
        name: "Producto 3",
        price: "$15.00",

    },
    {
        image: "img/jugueteyfondo2.png",
        name: "Producto 3",
        price: "$15.00",

    },
    // Agrega más productos aquí
];

const productListContainer = document.getElementById("product-list");

// Generar el contenido de los productos
const productHTML = products.map((product) => `
     
  <div class="product-card" >
    <img class="product-image" src="${product.image}" alt="${product.name}">
    <h3 class="product-name">${product.name}</h3>
    <p class="product-price">${product.price}</p>
    <button class="buy-button">Comprar</button>
  </div>
`).join("");

// Insertar el contenido en el contenedor en el HTML
productListContainer.innerHTML = productHTML;
