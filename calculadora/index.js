const { add, multiply, subtract} = require("./model/operacoes")

function calculadora(a, b, operacao){

    let result = 0
    result = operacao(a,b)

    return result
}

module.exports = {
    calculadora,
}