const products = [
    {
        image: "img/JUGUETE 1.png",
        image2: "img/JUGUETE 3.png",
        name: "Producto 1",
        price: "$10.00",

    },
    {
        image: "img/JUGUETE 1.png",
        image2: "img/JUGUETE 3.png",
        name: "Producto 2",
        price: "$15.00",

    },
    {
        image: "img/JUGUETE 1.png",
        image2: "img/JUGUETE 3.png",
        name: "Producto 3",
        price: "$15.00",

    },
    {
        image: "img/JUGUETE 1.png",
        image2: "img/JUGUETE 3.png",
        name: "Producto 4",
        price: "$15.00",

    },
    {
        image: "img/JUGUETE 1.png",
        image2: "img/JUGUETE 3.png",
        name: "Producto 5",
        price: "$15.00",

    },
    {
        image: "img/JUGUETE 1.png",
        image2: "img/JUGUETE 3.png",
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
            <img src="${product.image}" class="card-img-top object-fit-cover w-100" style="aspect-ratio: 1;" 
                onmouseover="showImage(this, '${product.image2}')" 
                onmouseout="showImage(this, '${product.image}')"
                alt="...">
            <div class="card-body">
                <h5 class="card-title" style="text-transform: uppercase; letter-spacing: 0.1em">${product.name}</h5>
                <p class="card-text">${product.price}</p>
                <a href="#" class="btn btn-primary">Agregar al carrito</a>
            </div>
        </div>
    </div>
`).join("");

// Insertar el contenido en el contenedor en el HTML
productListContainer.innerHTML = productHTML;


//texto adiccional
const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    const additionalText = card.querySelector('.additional-text');
    const cardTitle = card.querySelector('h5.card-title');
    const icon = card.querySelector('i');

    card.addEventListener('mouseenter', () => {
        additionalText.style.display = 'block';
        cardTitle.style.visibility = 'hidden';
        icon.style.visibility = 'hidden';
    });

    card.addEventListener('mouseleave', () => {
        additionalText.style.display = 'none';
        cardTitle.style.visibility = 'visible';
        icon.style.visibility = 'visible';
    });
});


//CAMBIANDO IMAGENES EN LA SECCION DE "NUESTROS DESTACADOS"
// Función para mostrar la imagen grande
function showImage(element, imageUrl) {
    element.src = imageUrl;
}