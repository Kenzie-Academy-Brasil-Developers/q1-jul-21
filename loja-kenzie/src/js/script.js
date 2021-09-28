const carrosselDestaque = document.querySelector(".carrosselDestaque img")
const urlsArray = ["./src/img/1.png","./src/img/2.png","./src/img/3.png","./src/img/4.png","./src/img/5.png"]

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


const vitrine = document.querySelector(".vitrineProdutos__vitrine")
const carrinho  = document.querySelector(".carrinho>ul")
vitrine.addEventListener("click", interceptar)

function interceptar(evt){
      
   // console.log(evt.currentTarget)
    const button = evt.target

    if(button.tagName === "BUTTON"){
        
        const produto  = button.closest("li")
        
        adicionarProdutoCarrinho(carrinho,produto)
      
    }
}

function adicionarProdutoCarrinho(carrinho,produto){
    carrinho.appendChild(produto)
}   




