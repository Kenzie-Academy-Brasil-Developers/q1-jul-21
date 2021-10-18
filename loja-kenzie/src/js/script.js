
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

// 1- LISTAR PRODUTOS -> FUNÇÃO TOTALMENTE PURA 
const listarProdutos = (arrayProdutos, callTemplateProduto, vitrine) =>{
   
    vitrine.innerHTML = ""

    arrayProdutos.forEach(function(produto){
        
        const template = callTemplateProduto(produto)
        vitrine.appendChild(template)

    });
    
}
listarProdutos(dataProdutos,templateProduto,vitrinePrincipal)

vitrinePrincipal.addEventListener("click", interceptar)
function interceptar(evt){
      
    const button = evt.target

    if(button.tagName === "BUTTON"){
        
       const idProduto  =  button.getAttribute("data-id")
        adicionarProdutoCarrinho(idProduto)
    }
}

const adicionarProdutoCarrinho = (idProduto) => {

    if(carrinho.adicionarProdutoCarrinho(idProduto)){

        listarProdutos(carrinho.produtos,templateProduto,vitrineCarrinho)
        quantidadeDeProdutos()

        notificacao("Produto Adicionado com sucesso", true)
    }else{
        notificacao("Estoque baixo", false)
    }
}

//interceptador 
//indentificar esse produto
vitrineCarrinho.addEventListener("click", removerProduto)
function removerProduto(evt){
      
    const button = evt.target
    if(button.tagName === "BUTTON"){
    
       const idProduto  =  button.getAttribute("data-id")

       carrinho.removerProduto(idProduto)

       listarProdutos(carrinho.produtos,templateProduto,vitrineCarrinho)
       quantidadeDeProdutos()
    }
}


//ATUALIZAR STATUS DO CARRINHO
const quantidadeDeProdutos = () => {

    //SELECIONA ELEMENTOS HTML QTD E PREÇO
    const qtdProdutos = document.getElementById("qtdProdutos")
    const precoTotal = document.getElementById("precoTotal")

    //SELECIONA O NOSSO ARRAY CARRINHO, PEGA O TOTAL DE PRODUTOS ARMAZENADO
    qtdProdutos.innerText = `QTD Produtos: ${carrinho.qtdProdutos}`
    precoTotal.innerText = `Total: R$ ${carrinho.precoTotal},00`
}


//FUNÇÃO DE NOTIFICAÇÃO
const notificacao = (mensagem,estado)=> {
    
    const divNotificacao = document.querySelector(".notificacao")
    const span = document.querySelector(".notificacao span")

    if(estado === true){
        divNotificacao.classList.add("sucesso")
        span.innerText = mensagem
    }else{
        divNotificacao.classList.add("erro")
        span.innerText = mensagem
    }

    setTimeout(function(){
        divNotificacao.classList.remove("erro")
        divNotificacao.classList.remove("sucesso")
    }, 1500)
}

//FILTRO POR PREÇO
let statusFiltro = false
const filtroPreco = ()=>{
    
    let produtosFiltrados   = [...dataProdutos]
    
    if(!statusFiltro){
        produtosFiltrados  = produtosFiltrados.sort((a,b)=> a.preco - b.preco)
        statusFiltro = true
    }else{
        produtosFiltrados  = produtosFiltrados.sort((a,b)=>  b.preco - a.preco )
        statusFiltro = false
    }
    
    listarProdutos(produtosFiltrados,templateProduto,vitrinePrincipal)
}

//FILTRO POR CATEGORIA
const filtroCategoria = (filtro, categoriaFiltro)=>{

    const produtosFiltrados = dataProdutos.filter((produto) => produto[categoriaFiltro] === filtro)
    
    listarProdutos(produtosFiltrados,templateProduto,vitrinePrincipal)
}   

// SELEÇÃO USUÁRIO 
const menuFiltro  = document.querySelector("nav>ul")
const interceptarFiltro = (evt) =>{
  
    evt.preventDefault()
    if(evt.target.tagName === "A"){
        
        const filtroSelecionado = evt.target.innerText.toLowerCase()
        
        if(filtroSelecionado === "home"){

            listarProdutos(dataProdutos,templateProduto,vitrinePrincipal)

        }else if(filtroSelecionado === "preço"){

            filtroPreco()

        }else if(filtroSelecionado === "oferta"){

            filtroCategoria(true, "oferta")
            
        }else{

            filtroCategoria(filtroSelecionado, "categoria")

        }
    }
}
menuFiltro.addEventListener("click", interceptarFiltro)
// Filtro por preço (ordenar a vitrine do mais caro para o mais barado e vice-versa) *
// Filtro por categoria *
// Filtro por oferta *
// Todos os produtos *

// ---
// Adicionar uma tag de baixo estoque no template do produto.
// Adicionar funcionalidade para  limpar todos os produtos no carrinho
// Aplicar mais notificações