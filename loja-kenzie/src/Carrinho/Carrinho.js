class CarrinhoModel {
    constructor(){
        this._produtos      = [];
        this._qtdProdutos   = 0;
        this._precoTotal    = 0;
    
        // document.getElementById("btnLimparCarrinho").addEventListener("click", function(){
        //     console.log(this._produtos )
        // }.bind(this))

        document.getElementById("btnLimparCarrinho").addEventListener("click", ()=> {
            this._produtos = []

            console.log(this._produtos)
        })

        //document.getElementById("btnLimparCarrinho").addEventListener("click", ()=> console.log(this._produtos = []))
    }

    get produtos(){
        return this._produtos
    }

    get qtdProdutos(){
        return this._qtdProdutos
    }

    get precoTotal(){
        return this._precoTotal
    }

    set qtdProdutos(qtd){
        this._qtdProdutos = qtd
    }

    set precoTotal(total){
        this._precoTotal = total
    }
    
    adicionarProdutoCarrinho(idProduto){
        console.log(this._produtos)
        const produtoFiltro  = this.filtroProduto(idProduto)
        if(produtoFiltro.estoque > 0){
            this._produtos.push(produtoFiltro)
            this.atualizarCarrinho()
            return true
        }

        return false
    }

    removerProduto(idProduto){
       
        const produtoFiltro  = this.filtroProduto(idProduto)
        const index = this._produtos.indexOf(produtoFiltro)
        this._produtos.splice(index,1)
        this.atualizarCarrinho()

    }

    filtroProduto(idProduto){
        return dataProdutos.find((produto)=> produto.id == idProduto)
    }

    calcularTotal(callCalculaFrete){
        
        const totalPreco = this._produtos.reduce(function(total,produto){
            
            if(produto.oferta === true){
                return total + Number(produto.precoPromocional)
            }else{
                return total + Number(produto.preco)
            }

        },0)

        const valorFrete = callCalculaFrete(totalPreco)
        this.precoTotal = totalPreco + valorFrete


        const elementoHTML = document.getElementById("valorFrete")
        elementoHTML.innerText = `Frete: R$ ${valorFrete},00`
    }

    atualizarCarrinho(){

        this.calcularTotal(calculaFrete)
        this.qtdProdutos = this.produtos.length

    }
}


function calculaFrete(valorPedido){

    if(valorPedido >= 200){
        return 0
    } else if(valorPedido >= 150){
        return 25
    }

    return 50
}


 
// OS DOIS BTNS 
const  btnLimparCarrinho = document.getElementById("btnLimparCarrinho")
const carrinho = new CarrinhoModel(btnLimparCarrinho)
//carrinho.adicionarProdutoCarrinho(12)
//console.log(carrinho)


var nome = "Hudson"
 nome = "Renato"

 
function meuNome(a,b){
    console.log("------------")
    console.log(a,b)
    console.log(this)
    console.log(this.nome)
}
//meuNome(0,1)

//meuNome.call({nome:"Maria"}, 2,3)

//meuNome.apply({nome:"Hudson"}, [3,4])

//RETORNA UMA NOVA FUNÇÃO 
const newMeuNome = meuNome.bind({nome:"Luciano"}, 4,5)
//newMeuNome()

const newFunction = ()=>{
    console.log(this)
}
newFunction()