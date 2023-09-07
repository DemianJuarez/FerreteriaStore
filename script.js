
//localStorage.setItem("productosEnVenta_featured", JSON.stringify(featuredProducts));


//localStorage.setItem("productosEnVenta_ofert", JSON.stringify(ofertProducts));


//localStorage.setItem("productosEnVenta_news", JSON.stringify(newsProducts));

const getProducts = async () => {
    const api = "https://64f659ae2b07270f705e6753.mockapi.io/api/products"
    const response = await fetch(api)
    const data = await response.json()
    console.log(data)


    const featuredProducts = data.filter(product => product.featured)
    const ofertProducts = data.filter(product => product.onSale)
    
    featuredProducts.map(product => {
        const productFeaturedElement = document.createElement("div")
        productFeaturedElement.classList.add("featuredProduct")
        productFeaturedElement.innerHTML = `
        <div class="info">
            <img class="featuredImg" src="${product.image}" alt="${product.title}" />
            <p class="productoTitle">TITULO: ${product.title}</p>
            <p class="productoId">ID: ${product.id}</p>
        </div>
        <div class="info2">
            <div class="buyButton">
                <img src="src/shopping-bag.svg" class="bagSvg" alt="bag">
                <img src="src/plus.svg" class="plusSvg" alt="plus">
            </div>
            <div class="price">
                <p class="productoPrecio">Precio $${product.price}</p>
                <p class="productoDiscountPrecio">  $${product.previousPrice}</p>
            </div>
        </div>
        `

        featuredProductsContainer.append(productFeaturedElement)

        const featuredBuyButton = productFeaturedElement.querySelector(".buyButton");
        featuredBuyButton.addEventListener("click", () => {
        handleAddProduct(product);
        });
    })

    ofertProducts.map(product => {
        const productOfertElement = document.createElement("div")
        productOfertElement.classList.add("ofertProduct")
        productOfertElement.innerHTML = `
        <div class="info">
            <div class="label">
                <img src="src/etiqueta.svg" class="etiquetaSvg" alt="etiqueta" />
                <p class="productoOfert">$10%</p>
            </div>
            <img class="ofertImg" src="${product.image}" alt="${product.title}"/>
            <p class="productoTitle">TITULO: ${product.title}</p>
            <p class="productoId">ID: ${product.id}</p>
        </div>
        <div class="info2">
            <div class="buyButton">
                <img src="src/shopping-bag.svg" class="bagSvg" alt="bag"/>
                <img src="src/plus.svg" class="plusSvg" alt="plus">
            </div>
            <div class="price">
                <p class="productoPrecio" >$${product.price}</p>
                <p class="productoDiscountPrecio">$${product.previousPrice}</p>
            </div>
        </div>
        `

        ofertProductsContainer.append(productOfertElement)

        const ofertBuyButton = productOfertElement.querySelector(".buyButton");
        ofertBuyButton.addEventListener("click", () => {
        handleAddProduct(product);
        });
    })

    data.map(product => {
        const productNewsElement = document.createElement('div')
        productNewsElement.classList.add("newsProduct")
        productNewsElement.innerHTML = ` 
        <div class="info">
                <img class='productoImg' src="${product.image}" />
                <div class="infoNews">
                    <p class=productoTitle>TITULO: ${product.title}</p>
                    <div class="star">
                        <img src="src/estrellaEntera.svg" />
                        <img src="src/estrellaEntera.svg" />
                        <img src="src/estrellaEntera.svg" />
                        <img src="src/estrellaEntera.svg" />
                        <img src="src/estrellaVacia.svg" />
                        <p>126</p>
                    </div>
                    <p>ID: ${product.id}</p>
                    <div class="price">
                        <p class="productoPrecio">${product.price}</p>
                        <p class='productoDiscountPrecio'>${product.previousPrice}</p>
                    </div>
                </div>
            </div>
            <div class="buyPart">
                <img src="src/truck.svg" />
                <p>Order Delivery</p>
                <div class="buyButton">
                    <img  class="bagSvg" src="src/black-shopping-bag.svg" />
                    <p>Add to cart</p>
                </div>
            </div>
        </div>
        `

        newsProductsContainer.append(productNewsElement)


        const newsBuyButton = productNewsElement.querySelector(".buyButton");
        console.log(newsBuyButton);
        newsBuyButton.addEventListener("click", () => {
        handleAddProduct(product);
        });
    })
    

}

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

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    initialize();
    getProducts();
    actualizarCantidadCarrito();
});
