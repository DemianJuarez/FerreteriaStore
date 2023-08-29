const products = []

const crearProduct = (name, price, id) => {
    return {
        itemPhoto: "llaveTubo.png",
        itemName : name,
        itemPrice : price,
        itemId : id
    }
}

const llaveDeTubo = crearProduct("llave de Tubo", 120, 1)
products.push(llaveDeTubo)

console.log(products)