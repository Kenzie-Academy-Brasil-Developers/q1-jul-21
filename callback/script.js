
// addEventListener("click", function(){
//     console.log(" Falar Oi")

// })
// setTimeout(callback, 1000)
// setInterval(() => {
// }, interval);
// array.map(callback)
// array.filter(callback)


function apresentar(nome){
    console.log(`Meu nome é ${nome}`)
}


function pessoa(pessoa, callApresentar){
   
    callApresentar(pessoa.nome)

}
//pessoa({nome:"Luciano"}, apresentar)

//---



//CALCULADORA
//2 NUMEROS
//OPERAÇÃO 

//2-2 => 2+2

function soma(a,b){
    return a + b
}

function multiplicacao(a,b){
    return a * b
}

function divisao(a,b){
    return a / b
}

function calculadora(numero1, numero2, callOperacao){

    const resultado  = callOperacao(numero1, numero2)

    return resultado
}

//calculadora(2,2, soma)


//callFormatacao


function pegarrNumero(numero, callback){
    if(typeof numero == "number"){
        
        callback(numero)
    
    }
}
//pegarrNumero(2,(numero) => console.log("O Numero é "+ numero))




const array = [2,3,5,6,7]



//array.forEach(mostrarValores)


//NEW FOREACH


function newForEach(array, callback){
    
    for(let index = 0; index<array.length; index++){
        
        callback(array[index], index, array)

    }

}


function mostrarValores(numero,i,array){
    
    console.log(`${i}:[${numero}]`)
    console.log(array)
    console.log(this[i] = numero)

}
newForEach(array, mostrarValores, {})



//MAP
//ARRAY COMO ARGUMENTO 
//FUNÇÃO COMO CALLBACK 
//PERCORRE ESSE ARRAY -> LOOP FOR  
// E PASSA OS VALORES PARA A FUNÇÃO CALLBACK EXECUTAR ALGUMA TAREFA 
// RETORNA UM NOVO ARRAY

let arrayNumeros  = [1,2,3,4,5,6,7]

function somar(numero){
    return numero + 5
}

function newMap(array, funCallback){

    let newArray = []

    for(let i = 0; i<array.length;i++){

        const resultado  = funCallback(array[i], i, array)
        newArray.push(resultado)

    }

    return newArray
}

let retornoNewmap = newMap(arrayNumeros,somar)
console.log(retornoNewmap)

console.log("------------map---------")

let retorno  = arrayNumeros.map(somar)
console.log(retorno)




