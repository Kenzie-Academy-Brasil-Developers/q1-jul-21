class CalculaFrete{
    constructor(valorPedido){
        this.valorPedido = valorPedido
    }

    validaFrete(){
        
        if(this.valorPedido >= 500){
            return 0
        }else if(this.valorPedido >= 200){
            return 25
        }

        return 50
    }

}
module.exports = CalculaFrete