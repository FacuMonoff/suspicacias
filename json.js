const products = [
    {
        image: "img/vicky 1.1.png",
        image2: "img/vicky 1.2.png",
        name: "VICKY 1",
        price: "$15.712",
        descripcion: "Este juguete mini Punto G recargable, de delicado  diseño e intensa vibraciones será tu mejor elección. Su diseño en la extremidad superior con mayor diámetro, lo hace sumamente estimulante con un mejor apoyo en la zona del punto G. Fácil control. Modo de uso. Mantenga presionado el botón de encendido durante 3 segundos para encender / apagar, la luz indicadora se enciende y comienza a vibrar.Cada vez que se presiona el botón de encendido, cambie el modo de vibración diferente.Durante la  carga, la luz indicadora parpadea, después de la carga completa, la luz sigue encendida.Cuando el producto se está cargando, el chip está en estado de protección y no se puede encender"

    },
    {
        image: "img/miky 4.png",
        image2: "img/miky 4.1.png",
        name: "MIKY 4",
        price: "$15.302",
        descripcion: "Este estimulador de punto G, tiene un diseño sofiticado, a puro glamour y elegantemente delicado e intenso. Su extremo curvo y sus bordes lisos te darán la posibilidad de estimularte la zona del punto G de manera diferente."
    },
    {
        image: "img/katy 4.png",
        image2: "img/katy 4.1.png",
        name: "KATY 4",
        price: "$9.588",
        descripcion: "Este juguete es un vaginal corto con curvatura para estimular Punto G, de delicado  diseño e intensa vibración. Fácil control. Mantener pulsado durante 3 segundos para prender y apagar."

    },
    {
        image: "img/diamont 1.1.png",
        image2: "img/diamont 1.png",
        name: "DIAMONT 1",
        price: "$27.442",
        descripcion: "¿Buscas sentirte diferente? El Vibrador Diamond,  tiene un diseño sofisticado a puro glamour, y elegantemente brillante e intenso. Con su doble motor estimulará completamente tu zona de punto G y clítoris de manera muy efectiva. Para una dosis extra de placer, combínalo con el serum lubricante EOS DSICOVER PUNTO G."
    },
    {
        image: "img/male 2.png",
        image2: "img/male 2.1.png",
        name: "MALE 2",
        price: "$34.462",
        descripcion: "Este vibrador recargable de triple estimulación con su leve curvatura lisa en su extremo, un clitorial intenso y con cuentas anales en su otro extremo hará de éste; un poderoso y excitante juguete. Ideal mujeres intensas que quieren sentirse plenas. Su vaginal curvo hará que puedas disfrutar del apoyo perfecto en Punto G."
    },
    {
        image: "img/luxe rabbit 1.png",
        image2: "img/luxe rabbit 1.1.png",
        name: "LUXE RABBIT",
        price: "$51.383",
        descripcion: "está equipado con características únicas para provocar y tentar. Eje giratorio de 3 velocidades a prueba de agua Tecnología Rolling WavesTM 7 Vibrador con función de estimulador del clítoris Elastómero puro seguro para la piel Libre de ftalato y látex El carro extraíble de la batería ahorra vida útil de la batería: requiere 3 baterías AAA Longitud: 9 pulgadas Longitud insertable: 4 pulgadas Ancho: 1.43 pulgadas Circunferencia: 4.5 pulgadas Peso del producto (sin paquete) : 8.6 onzas"
    },
    {
        image: "img/ana 8.png",
        image2: "img/JUGUETE 3.png",
        name: "ANA 8",
        price: "$35.238",
        descripcion: " Su intensa vibración se concentra a lo largo de todo el juguete y aún más fuerte en su cabezal, esto hace que puedas deslizarlo en tu zona genital y en cualquier otra parte del cuerpo donde necesites estimularte. Este masajeador contiene otro cabezal para poder experimentar los 10 niveles de succión que quieras en tu zona Clitorial. Modo de uso. Mantenga presionado el botón de encendido durante 3 segundos para encender / apagar, la luz indicadora se enciende y comienza a vibrar. Cada vez que se presiona el botón de encendido, cambie el modo de vibración diferente. Durante la carga, la luz indicadora parpadea, después de la carga completa, la luz sigue encendida. Cuando el producto se está cargando, el chip está en estado de protección y no se puede encender. Presione el botón derecho para ajustar los modos de pulsación del cabezal, 10 modos de pulsación de frecuencia. Presione el botón izquierdo para ajustar los 10 modos de vibración final. Cambie el cabezal para sus 10 niveles de succión. "
    },
    {
        image: "img/sofi 3.png",
        image2: "img/sofi 3.1.png",
        name: "SOFI 3",
        price: "$18.494",
        descripcion: "Este modelo de vibrador tiene un diámetro un poco más ancho en su extremo superior  y uno levemente menor  en su base, es muy suave e intenso. Con su doble motor estimulará completamente tu zona de vaginal y clítoris de manera muy efectiva. Apenas con una zona superior texturada y su estimulador de clítoris con un diseño de conejo con una solo oreja."

    },
    // Agrega más productos aquí
];

const productListContainer = document.getElementById("product-list");

// Generar el contenido de los productos
const productHTML = products.map((product) => `
    <div class="col">
        <div class="card h-100">
            <a href="descripcion.html?index=${products.indexOf(product)}"> <!-- Agregamos el enlace aquí -->
                <img src="${product.image}" class="card-img-top object-fit-cover w-100" style="aspect-ratio: 1;" 
                    onmouseover="showImage(this, '${product.image2}')" 
                    onmouseout="showImage(this, '${product.image}')"
                    alt="...">
            </a>
            <div class="card-body">
                <h5 class="card-title" style="text-transform: uppercase; letter-spacing: 0.1em">${product.name}</h5>
                <p class="card-text">${product.price}</p>
                <a href="descripcion.html?index=${products.indexOf(product)}" class="btn btn-primary">Agregar al carrito</a>
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

//PLANTILLA

window.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productIndex = parseInt(urlParams.get("index"));

    if (!isNaN(productIndex) && productIndex >= 0 && productIndex < products.length) {
        const selectedProduct = products[productIndex];
        // Aquí puedes acceder a la información del producto seleccionado (selectedProduct)
        // y modificar el contenido HTML de "descripcion.html" para mostrar la descripción del producto.
        // Por ejemplo:
        document.getElementById("product-image").src = selectedProduct.image;
        document.getElementById("product-image2").src = selectedProduct.image2;
        document.getElementById("product-name").textContent = selectedProduct.name;
        document.getElementById("product-price").textContent = selectedProduct.price;
        document.getElementById("product-descripcion").textContent = selectedProduct.descripcion;
        // ... Agrega más código para mostrar otros detalles del producto si es necesario.
    } else {
        // Si el índice del producto no es válido o no se proporcionó, puedes mostrar un mensaje de error o redirigir al usuario a otra página.
    }
});