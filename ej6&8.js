const products = [
    {
        id: 1,
        title: "Macbook Pro M1 8GB",
        price: 1500
    },
    {
        id: 2,
        title: "Macbook Pro M1 16GB",
        price: 1700
    },
    {
        id: 3,
        title: "Macbook Air M1 13'",
        price: 1300
    },
    {
        id: 4,
        title: "Macbook Air M2 13'",
        price: 1450
    },
    {
        id: 5,
        title: "iMac M2 24'",
        price: 2000
    },
];

const productWithId2 = () => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === 2) {
            console.log(products[i]);
        }
    }
}

console.log("Product with id 2")
productWithId2()

const expensiveProducts = () => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].price > 1500) {
            console.log(products[i])
        }
    }
}


console.log("Expensive products: ")
expensiveProducts()

const showProductInstallments = () => {
    for (let i = 0; i < products.length; i++) {
        const doceprice = Math.ceil(products[i].price / 12)
        console.log("id: " + products[i].id + " doce cuotas de " + doceprice)
    }
}

showProductInstallments()

const searchMacbooks = () => {
    for (let i = 0; i < products.length; i++) {
        const productTitle = products[i].title.toLowerCase();
        if (productTitle.includes('macbook')) {
            console.log(products[i]);
        }
    }
}
searchMacbooks();


// EJERCICIO 8 

const existsExpensiveProducts = () => {
    const expensiveProduct = products.find(product => product.price >= 2000);
    if (expensiveProduct) {
        return true;
    }
}

const result4 = existsExpensiveProducts();
console.log(result4);


function applyDiscount() {
    const discountedProducts = [];
    
    products.forEach(product => {
        const discountedPrice = product.price * 0.9; // Aplicar un 10% de descuento
        const discountedProduct = { ...product, price: discountedPrice };
        discountedProducts.push(discountedProduct);
    });

    return discountedProducts;
}

const result5 = applyDiscount();
console.log("products with discount: ");
console.log(result5);   