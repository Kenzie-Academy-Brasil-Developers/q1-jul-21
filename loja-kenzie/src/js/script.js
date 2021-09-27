
//const produtos = document.querySelectorAll(".vitrineProdutos__vitrine li button")

//  for(let i = 0; i< produtos.length;i++){
    
//         produtos[i].addEventListener("click", addCarrinho)

//  }


// produtos.forEach(function(produto){
//     produto.addEventListener("click", addCarrinho)
// })



const vitrine = document.querySelector(".vitrineProdutos__vitrine")
vitrine.addEventListener("click", interceptar)

function interceptar(evt){
      
   // console.log(evt.currentTarget)
    const button = evt.target

    if(button.tagName === "BUTTON"){
        
        const produto  = button.closest("li")

    }
}

function addCarinho(){
    console.log("adicionou")
}



const div1 = document.getElementById("div1")
div1.addEventListener("click", function(evt){
    setTimeout(function(){
     div1.style.backgroundColor = "blue"
    }, 1100)
})


const div2 = document.getElementById("div2")
div2.addEventListener("click", function(evt){
    setTimeout(function(){
        div2.style.backgroundColor = "blue"
    }, 1000)
})

const div3 = document.getElementById("div3")
div3.addEventListener("click", function(evt){
    setTimeout(function(){
        div3.style.backgroundColor = "blue"
    }, 900)

})

const div4 = document.getElementById("div4")
div4.addEventListener("click", function(evt){

    setTimeout(function(){
        div4.style.backgroundColor = "blue"
    }, 800)

    
})

const div5 = document.getElementById("div5")
div5.addEventListener("click", function(evt){

    setTimeout(function(){
        div5.style.backgroundColor = "blue"
    }, 500)
  
    
})