const products = [
    //FeaturedProducts
    {
        id: "featured-0",
        img: ".src/llaveTubo.png",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        categoria: "Featured",
        precio: 999,
        discountPrecio: 699
    },
    {
        id: "featured-1",
        img: ".src/llaveTubo.png",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        categoria: "Featured",
        precio: 999,
        discountPrecio: 699
    },
    {
        id: "featured-2",
        img: ".src/llaveTubo.png",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        categoria: "Featured",
        precio: 999,
        discountPrecio: 699
    },
    {
        id: "featured-3",
        img: ".src/llaveTubo.png",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        categoria: "Featured",
        precio: 999,
        discountPrecio: 699
    },
    {
        id: "ofert-4",
        img: ".src/llaveTubo.png",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        categoria: "Ofert",
        precio: 999,
        discountPrecio: 699
    },
    {
        id: "ofert-5",
        img: ".src/llaveTubo.png",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        categoria: "Ofert",
        precio: 999,
        discountPrecio: 699
    },
    {
        id: "ofert-6",
        img: ".src/llaveTubo.png",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        categoria: "Ofert",
        precio: 999,
        discountPrecio: 699
    },
    {
        id: "ofert-7",
        img: ".src/llaveTubo.png",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        categoria: "Ofert",
        precio: 999,
        discountPrecio: 699
    },
    {
        id: "news-8",
        img: ".src/llaveTubo.png",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        categoria: "News",
        precio: 999,
        discountPrecio: 699
    },
    {
        id: "news-9",
        img: ".src/llaveTubo.png",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        categoria: "News",
        precio: 999,
        discountPrecio: 699
    }
]

const productsContainer = document.querySelector("#products")

const uploadFeaturedProducts = () => {
    products.forEach(product => {
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

        productsContainer.append("div")
    })
}

uploadFeaturedProducts()