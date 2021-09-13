//metodos de string

//lowercase
const sentence = 'Hoje o Dia Amanheceu muito QUENTE';

sentence.toLowerCase();
//"hoje o dia amanheceu muito quente"

//uppercase
sentence.toUpperCase();
//"HOJE O DIA AMANHECEU MUITO QUENTE"


//split

function splitString(stringInteira, separador){
    const arrayStrings = stringInteira.split(separador);

    //console.log('A string original:', stringInteira);
    //console.log('Separador: ', separador);
    //console.log('Resultado: ', arrayStrings);

    return arrayStrings;
}

const tempoString = 'Hoje o dia amanheceu muito quente';

const espaco = ' ';

splitString(tempoString,espaco);

const mesesString = 'Jan,Fev/Mar,Abr/Mai/Jun,Jul/Ago/Set/Out/Nov/Dez';

/*array = [
        'jan', 'fev/mar', 'Abr/Mai/Jun', 'Jul/Ago/Set/Out/Nov/Dez'
]*/

//console.log(mesesString.split(','));

//split(string, separador);
//split(separador)

//JOIN
const frutas = ['1254', 'Melão com manga', 'Morango com chocolate', 'Uva'];

//console.log(frutas.join());

//metodos de array

//FOREACH

//foreach(element,index,array) {}

const arrayNumeros = [1,2,3,4,5,6];

function verificaPares(elemento){
    if(elemento % 2 == 0){
        console.log(elemento);
    }
};

//arrayNumeros.forEach(verificaPares);
const novoArray = [];

arrayNumeros.forEach(numero => {
    if(numero % 2 == 0){

        console.log(numero);

        novoArray.push(numero);//construir um array com os pares
        console.log(novoArray);

        return numero;
    };
});

const arrayMarcas = [
    {marca: 'Ford', modelo: 'Focus', ano: '2001' },
    {marca: 'Fiat', modelo: 'Palio' },
    {marca: 'Audi', modelo: 'A3', ano: '2019' }
];

arrayMarcas.forEach( textString => {
    console.log("Marca: " + textString.marca + " - modelo: " + textString.modelo);
});


function nome(){
    let nome = 'Meu nome';
    return nome;
}

nome => { 
    return nome = 'Meu nome'; 
}

//includes
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat')); 
//a comparação é case sensitive, tem que ser exatamente igual Cat NÃO É IGUAL cat
// expected output: true

console.log(pets.includes('aaat'));
// expected output: false






