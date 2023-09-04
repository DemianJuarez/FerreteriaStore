const featuredProducts = [
    //FeaturedProducts
    {
        id: "featured-0",
        img: "src/llaveTubo.png",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        categoria: "Featured",
        precio: 999,
        discountPrecio: 699
    },
    {
        id: "featured-1",
        img: "src/llaveTubo.png",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        categoria: "Featured",
        precio: 999,
        discountPrecio: 699
    },
    {
        id: "featured-2",
        img: "src/llaveTubo.png",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        categoria: "Featured",
        precio: 999,
        discountPrecio: 699
    },
    {
        id: "featured-3",
        img: "src/llaveTubo.png",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        categoria: "Featured",
        precio: 999,
        discountPrecio: 699
    }
]

localStorage.setItem("productosEnVenta_featured", JSON.stringify(featuredProducts));

async function getFeaturedProducts() {
    return featuredProducts;
}

const ofertProducts = [
    {
        id: "ofert-4",
        img: "src/llaveTubo.png",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        categoria: "Ofert",
        ofert: 10,
        precio: 999,
        discountPrecio: 699
    },
    {
        id: "ofert-5",
        img: "src/llaveTubo.png",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        categoria: "Ofert",
        ofert : 10,
        precio: 999,
        discountPrecio: 699
    },
    {
        id: "ofert-6",
        img: "src/llaveTubo.png",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        categoria: "Ofert",
        ofert: 10,
        precio: 999,
        discountPrecio: 699
    },
    {
        id: "ofert-7",
        img: "src/llaveTubo.png",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        categoria: "Ofert",
        ofert: 10,
        precio: 999,
        discountPrecio: 699
    }
]

localStorage.setItem("productosEnVenta_ofert", JSON.stringify(ofertProducts));

async function getOfertProducts() {
    return ofertProducts;
}

const newsProducts = [
    {
        id: "news-8",
        img: "src/llaveTubo.png",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        categoria: "News",
        precio: 999,
        discountPrecio: 699
    },
    {
        id: "news-9",
        img: "src/llaveTubo.png",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        categoria: "News",
        precio: 999,
        discountPrecio: 699
    }
]

localStorage.setItem("productosEnVenta_news", JSON.stringify(newsProducts));

async function getNewsProducts() {
    return newsProducts;
}


let featuredProductsContainer
let ofertProductsContainer
let newsProductsContainer

const handleAddProduct = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Check si ya hay productos en el carrito en el localStorage
    cart.push(product); // Agrega el producto actual al carrito
    localStorage.setItem("cart", JSON.stringify(cart));     // Actualiza el carrito en el localStorage
    alert("Producto agregado al carrito");
    actualizarCantidadCarrito();
};


function initialize() {
    featuredProductsContainer = document.querySelector(".featuredProducts")
    ofertProductsContainer = document.querySelector(".ofertProducts")
    newsProductsContainer = document.querySelector(".newsProducts")
    console.log(featuredProductsContainer)
    console.log(ofertProductsContainer)
    console.log(newsProductsContainer)
}

function actualizarCantidadCarrito() {
    const cartItemCount = document.getElementById("cartItemCount");
    const cart = JSON.parse(localStorage.getItem("cart")) || []; //Trae carrito desde el localStorage
    const cantidadProductos = cart.length;     // Calcula la cantidad de productos en el carrito
    cartItemCount.textContent = cantidadProductos.toString();     // Actualiza el contenido del elemento span

}

const uploadFeaturedProducts = async () => {
    const awaitProducts = await getFeaturedProducts();
    awaitProducts.forEach(product => {
        const div = document.createElement("div")
        div.classList.add("featuredProduct");
        div.innerHTML = `
            <div class="info">
                <img src="${product.img}" alt="${product.title}">
                <p class="productoTitle">${product.title}<p>
                <p class="productoId">${product.id}</p>
            </div>
            <div class="info2">
                <div class="buyButton">
                    <img src="src/shopping-bag.svg" class="bagSvg" alt="bag">
                    <img src="src/plus.svg" class="plusSvg" alt="plus">
                    </div>
                    <div class="price">
                        <p class="productoPrecio">$${product.precio}</p>
                        <p class="productoDiscountPrecio">$${product.discountPrecio}</p>
                    </div>
                </div>
        `;

        const buyButton = div.querySelector(".buyButton");
        buyButton.addEventListener("click", () => {
            handleAddProduct(product);
        });
        featuredProductsContainer.append(div)
    })
}

const uploadOfertProducts = async () => {
    const awaitProducts = await getOfertProducts();
    awaitProducts.forEach(product => {
        const div = document.createElement("div")
        div.classList.add("ofertProduct");
        div.innerHTML = `
            <div class="info">
                <img src="src/etiqueta.svg" class="etiquetaSvg" alt="etiqueta" />
                <p class="productoOfert">${product.ofert}%</p>
                <img src="${product.img}" alt="${product.title}"/>
                <p class="productoTitle" >${product.title}</p>
                <p class="productoId" >${product.id}</p>
            </div>
            <div class="info2">
                <div class="buyButton">
                    <img src="src/shopping-bag.svg" class="bagSvg" alt="bag"/>
                    <img src="src/plus.svg" class="plusSvg" alt="plus">
                </div>
                <div class="price">
                    <p class="productoPrecio" >$${product.precio}</p>
                    <p class="productoDiscountPrecio">$${product.discountPrecio}</p>
                </div>
            </div>
        `;

        const buyButton = div.querySelector(".buyButton");
        buyButton.addEventListener("click", () => {
            handleAddProduct(product);
        });
        ofertProductsContainer.append(div)
    })
}

const uploadNewsProducts = async () => {
    const awaitProducts = await getNewsProducts()
    awaitProducts.forEach(product => {
        const div = document.createElement('div');
        div.classList.add("newsProduct");
        div.innerHTML = `
            <div class="info">
                <img src="${product.img}" />
                <p>${product.title}</p>
                <div class="star">
                    <img src="src/estrellaEntera.svg" />
                    <img src="src/estrellaEntera.svg" />
                    <img src="src/estrellaEntera.svg" />
                    <img src="src/estrellaEntera.svg" />
                    <img src="src/estrellaVacia.svg" />
                    <p>126</p>
                </div>
                <p>${product.id}</p>
            </div>
            <div class="info2"
                <div class="price">
                    <p>${product.precio}</p>
                    <p>${product.discountPrecio}</p>
                </div>
                <div class="buyPart">
                    <img src="src/truck.svg" />
                    <p>Order Delivery</p>
                    <div class="buyButton">
                        <img src="src/shopping-bag.svg" />
                        <p>Add to cart</p>
                    </div>
                </div>
            </div>
        `;

        const buyButton = div.querySelector(".buyButton");
        buyButton.addEventListener("click", () => {
            handleAddProduct(product);
        });
        newsProductsContainer.append(div);
        console.log(product.img);
    })
}

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");

    initialize();
    uploadFeaturedProducts();
    uploadOfertProducts();
    uploadNewsProducts();
    actualizarCantidadCarrito();
});
