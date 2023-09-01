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


let featuredProductsContainer
let ofertProductsContainer
let newsProductsContainer

function initialize() {
    featuredProductsContainer = document.querySelector(".featuredProducts")
    ofertProductsContainer = document.querySelector(".ofertProducts")
    newsProductsContainer = document.querySelector(".newsProducts")
    console.log(featuredProductsContainer)
    console.log(ofertProductsContainer)
    console.log(newsProductsContainer   )
}


const uploadFeaturedProducts = () => {
    featuredProducts.forEach(product => {
        const div = document.createElement("div")
        div.classList.add("featuredProduct");
        div.innerHTML = `
            <div class="info">
                <img src="${product.img}" alt="${product.title}">
                <p>${product.title}<p>
                <p>${product.id}</p>
            </div>
            <div class="info2">
                <div class="buyButton">
                    <img src="src/shopping-bag.svg" alt="bag">
                    <img src="src/plus.svg" alt="plus">
                    </div>
                    <div class="price">
                        <p>$${product.precio}</p>
                        <p>$${product.discountPrecio}</p>
                    </div>
                </div>
        `;

        featuredProductsContainer.append(div)
    })
}

const uploadOfertProducts = () => {
    ofertProducts.forEach(product => {
        const div = document.createElement("div")
        div.classList.add("ofertProduct");
        div.innerHTML = `
            <div class="info">
                <img src="src/etiqueta.svg" alt="etiqueta" />
                <p>${product.ofert}%</p>
                <img src="${product.img}" alt="${product.title}"/>
                <p>${product.title}</p>
                <p>${product.id}</p>
            </div>
            <div class="info2">
                <div class="buyButton">
                    <img src="src/shopping-bag.svg" alt="bag"/>
                    <img src="src/plus.svg" alt="plus">
                </div>
                <div class="price">
                    <p>${product.precio}</p>
                    <p>${product.discountPrecio}</p>
                </div>
            </div>
        `;

        ofertProductsContainer.append(div)
    })
}

const uploadNewsProducts = () => {
    newsProducts.forEach(product => {
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
                <div class="buyButton">
                    <img src="src/truck.svg" />
                    <p>Order Delivery</p>
                    <img src="src/shopping-bag.svg" />
                    <p>Add to cart</p>
                </div>
            </div>
        `;

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
});
