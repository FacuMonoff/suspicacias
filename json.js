const products = [
    {
        image: "img/JUGUETE 1.png",
        name: "Producto 1",
        price: "$10.00",

    },
    {
        image: "img/JUGUETE 1.png",
        name: "Producto 2",
        price: "$15.00",

    },
    {
        image: "img/JUGUETE 1.png",
        name: "Producto 3",
        price: "$15.00",

    },
    {
        image: "img/JUGUETE 1.png",
        name: "Producto 4",
        price: "$15.00",

    },
    {
        image: "img/JUGUETE 1.png",
        name: "Producto 5",
        price: "$15.00",

    },
    {
        image: "img/JUGUETE 1.png",
        name: "Producto 6",
        price: "$15.00",

    },
    // Agrega más productos aquí
];

const productListContainer = document.getElementById("product-list");

// Generar el contenido de los productos
const productHTML = products.map((product) => `
     
    <div class="col">
        <div class="card h-100">
            <img src="${product.image}" class="card-img-top object-fit-cover w-100" style="aspect-ratio: 1;" alt="...">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.price}</p>
                <a href="#" class="btn btn-primary">Agregar al carrito</a>
            </div>
        </div>
    </div>
`).join("");

// Insertar el contenido en el contenedor en el HTML
productListContainer.innerHTML = productHTML;
