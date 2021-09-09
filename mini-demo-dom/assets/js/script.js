const data = [
    {
        "id": 1,
        "name": "Tenis top",
        "img_url": "https://imgcentauro-a.akamaihd.net/900x900/93441201/tenis-adidas-grand-court-feminino-img.jpg",
        "value": 230.00
    },
    {
        "id": 3,
        "name": "Tenis Kenzie",
        "img_url": "https://imgcentauro-a.akamaihd.net/900x900/95509531/tenis-nike-reposto-masculino-img.jpg",
        "value": 350.00
    },
    {
        "id": 8,
        "name": "Tenis +1",
        "img_url": "https://a-static.mlcdn.com.br/618x463/tenis-feminino-bordado-fe-branco-salto-plataforma-anabela-casual-dia-a-dia-gugi-calcados/gugicalcados/pfe-branco-34-ale2/127214c867226775b3fa1a791a2d44e2.jpg",
        "value": 280.00
    },
    {
        "id": 11,
        "name": "Tenis aquele",
        "img_url": "http://www.botoli.com.br/cdn/imagens/produtos/det/tenis-fila-masculino-euro-jogger-sport-0714e7fff1283ec7955c7aa161c1b6c0.jpg",
        "value": 570.00
    },
]

let cartArray = []

function createProductCard(product) {
    const productCard = document.createElement('div')
    productCard.classList.add('product_card')

    const productName = document.createElement('h3')
    productName.innerText = product.name
    productCard.appendChild(productName)

    const productImg = document.createElement('img')
    productImg.src = product.img_url
    productCard.appendChild(productImg)

    const productValue = document.createElement('span')
    productValue.classList.add('value')
    productValue.innerText = `R$ ${product.value.toFixed(2)}` // 'R$ ' + product.value
    productCard.appendChild(productValue)

    const buttonAdd = document.createElement('button')
    buttonAdd.classList.add('product_card_add')
    buttonAdd.innerText = 'Adcionar'
    buttonAdd.addEventListener('click', function(){
        addToCart(product)
    })
    productCard.appendChild(buttonAdd)

    const vitrine = document.querySelector('.vitrine')
    vitrine.appendChild(productCard)

}

// createProductCard({
//     "id": 11,
//     "name": "Tenis aquele",
//     "img_url": "http://www.botoli.com.br/cdn/imagens/produtos/det/tenis-fila-masculino-euro-jogger-sport-0714e7fff1283ec7955c7aa161c1b6c0.jpg",
//     "value": 570.00
// })

// data.forEach((produto) => {
//     createProductCard(produto)
// })

for (let i = 0; i < data.length; i++) {
    createProductCard(data[i])
}


function createListProductCart(product) {
    const productLi = document.createElement('li')
    productLi.id = product.id

    const productImg = document.createElement('img')
    productImg.src = product.img_url
    productLi.appendChild(productImg)

    const productName = document.createElement('h3')
    productName.innerText = product.name
    productLi.appendChild(productName)

    const productQuantidade = document.createElement('span')
    productQuantidade.innerText = `qtd: ${product.quantidade}`
    productLi.appendChild(productQuantidade)


    const productTotal = document.createElement('span')
    productTotal.classList.add('cart_produto_total')
    productTotal.innerText = `R$ ${product.value.toFixed(2)}`
    productLi.appendChild(productTotal)

    const cart = document.querySelector('.cart ul')
    cart.appendChild(productLi)

}


// createListProductCart({
//     "id": 11,
//     "name": "Tenis aquele",
//     "img_url": "http://www.botoli.com.br/cdn/imagens/produtos/det/tenis-fila-masculino-euro-jogger-sport-0714e7fff1283ec7955c7aa161c1b6c0.jpg",
//     "value": 570.00
// })


function updateTotal() {
    let result = 0
    for (let i = 0; i < cartArray.length; i++) {
        result += cartArray[i].value*cartArray[i].quantidade
    }
    const total = document.getElementById('total_cart')
    total.innerText = result.toFixed(2)
}

function addToCart(product) {
    if(isProductInCart(product)) {
        increaseProductOnCart(product)
    } else {
        product.quantidade = 1
        createListProductCart(product)
        cartArray.push(product)
        updateTotal()
    }
}

function isProductInCart(product) {
    for(let i = 0; i < cartArray.length; i++) {
        if (product.id === cartArray[i].id) {
            return true
        }
    }
    return false
}

function increaseProductOnCart(product) {
    for (let i = 0; i < cartArray.length; i++) {
        if(product.id === cartArray[i].id) {
            cartArray[i].quantidade += 1
        }
    }
    updateListCard(product)
}

function updateListCard(product) {
    const li = document.getElementById(product.id)
    const qtd = li.children[2]
    const total = li.children[3]
    console.log(qtd, total)
    const totalValue = product.value * product.quantidade
    total.innerText = `R$ ${totalValue.toFixed(2)}`
    qtd.innerText = `qtd: ${product.quantidade}`
}