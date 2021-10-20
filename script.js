// function add(a, b){
//     const valores = [...arguments]
//     let result = 0
//     for (let i = 2; i < arguments.length; i++) {
//         result += arguments[i]
//     }
//     return result
// }

// const add = (a, b, ...valores) => {
//     console.log(valores)
//     let result = 0
//     for (let i = 0; i < valores.length; i++) {
//         result += valores[i]
//     }
//     return result
// }

const add = (a, b) => a + b

const mult = (a, b) => a * b

const calculadora = (callback, ...valores) => {
    let result = valores[0]
    for (let i = 1; i < valores.length; i++) {
        result = callback(result, valores[i])
    }
    return result
}

console.log(calculadora(add, 1,3,1,5))

class Pessoa {
    constructor(nome, sobrenome, cpf, endereco, telefone) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
        this.endereco = endereco
        this.telefone = telefone

    }
}

class Aluno extends Pessoa{
    constructor(nome, sobrenome, cpf, endereco, telefone, frequencia) {
        super(...arguments)
        this.frequencia = frequencia
    }
}

const luciano = new Aluno("luciano", "feder")

Pessoa.prototype.apresentar = function() {
    return `Ola sou o ${this.nome} ${this.sobrenome}`
}

Array.prototype.newMap = function() {
    return this[0]
}


const teste = ({nome, sobrenome}) => {
    if (sobrenome === undefined) {
        return nome
    }
    return nome + sobrenome
}

