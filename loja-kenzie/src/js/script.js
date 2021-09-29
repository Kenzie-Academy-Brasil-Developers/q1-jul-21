const carrosselDestaque = document.querySelector(".carrosselDestaque img")
const urlsArray = ["./src/img/1.png","./src/img/2.png","./src/img/3.png","./src/img/4.png","./src/img/5.png"]
const vitrinePrincipal = document.querySelector(".vitrineProdutos__vitrine")
const vitrineCarrinho  = document.querySelector(".carrinho>ul")

function carrosselStart(img,urls){
    
    let contador = 0
    
    setInterval(function(){
       
        if(contador < urls.length){
            img.src = urls[contador]
            contador++
        }else{
            contador =  0 
        }
        
    },1000);

}
carrosselStart(carrosselDestaque,urlsArray)


//TEMPLATE PRODUTO
const templateProduto = ({id,produtoNome,imageUrl,preco,precoPromocional,oferta}) =>{

    const li                = document.createElement("li")
    const img               = document.createElement("img")
    const h2                = document.createElement("h2")
    const div               = document.createElement("div")
    const tagPreco          = document.createElement("p")
    const tagPrecoPromocial = document.createElement("p")
    const button            = document.createElement("button")

    img.src = imageUrl
    img.alt = produtoNome
    h2.innerText = produtoNome
    tagPreco.innerText = `R$ ${preco.replace(".",",")}`
    tagPrecoPromocial.innerText = `R$ ${precoPromocional.replace(".",",")}`
    button.innerText = "Comprar"
    button.setAttribute("data-id",id)

    //ALIMENTANDO O TEMPLATE

    li.classList.add("vitrineProdutos__vitrine__produto")
    li.appendChild(img)
    li.appendChild(h2)
    div.appendChild(tagPreco)

    if(oferta === true){
        li.classList.add("promocao")
        div.appendChild(tagPrecoPromocial) 
    }
   
    li.appendChild(div)
    li.appendChild(button)

    return li
}

//LISTAR PRODUTOS -> FUNÇÃO TOTALMENTE PURA 
const listarProdutos = (arrayProdutos, callTemplateProduto, vitrine) =>{
   
    vitrine.innerHTML = ""

    arrayProdutos.forEach(function(produto){
        
        const template = callTemplateProduto(produto)
        vitrine.appendChild(template)

    });
    
}
listarProdutos(dataProdutos,templateProduto,vitrinePrincipal)

//1 FUNÇÃO PARA LISTAR OS PRODUTOS DA BASE
//a) montar template de produto *
//b) array produtos *
//c) mostrar os produtos na vitrine *

//2) VALIDAÇÕES 
//a) produto em promoção  *
//b) tratar o preço *
//c) validar preço promocional * 
//d) validar estoque *




vitrinePrincipal.addEventListener("click", interceptar)
function interceptar(evt){
      
    const button = evt.target

    if(button.tagName === "BUTTON"){
        
        //const produto  = button.closest("li")
        //const produto  = produto.cloneNode("li")
       const idProduto  =  button.getAttribute("data-id")
        adicionarProdutoCarrinho(idProduto)
    }
}

const carrinho = []
const adicionarProdutoCarrinho = (idProduto) => {

    const produtoFiltro  = dataProdutos.find((produto)=> produto.id == idProduto)

    carrinho.push(produtoFiltro)
    listarProdutos(carrinho,templateProduto,vitrineCarrinho)
}



  




