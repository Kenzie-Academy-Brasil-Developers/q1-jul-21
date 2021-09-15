//metodos de string

//lowercase
const sentence = "Hoje o Dia Amanheceu muito QUENTE";

sentence.toLowerCase();
//"hoje o dia amanheceu muito quente"

//uppercase
sentence.toUpperCase();
//"HOJE O DIA AMANHECEU MUITO QUENTE"

//split

function splitString(stringInteira, separador) {
  const arrayStrings = stringInteira.split(separador);

  //console.log('A string original:', stringInteira);
  //console.log('Separador: ', separador);
  //console.log('Resultado: ', arrayStrings);

  return arrayStrings;
}

const tempoString = "Hoje o dia amanheceu muito quente";

const espaco = " ";

splitString(tempoString, espaco);

const mesesString = "Jan,Fev/Mar,Abr/Mai/Jun,Jul/Ago/Set/Out/Nov/Dez";

/*array = [
        'jan', 'fev/mar', 'Abr/Mai/Jun', 'Jul/Ago/Set/Out/Nov/Dez'
]*/

//console.log(mesesString.split(','));

//split(string, separador);
//split(separador)

//JOIN
const frutas = ["1254", "Melão com manga", "Morango com chocolate", "Uva"];

//console.log(frutas.join());

//metodos de array

//FOREACH

//foreach(element,index,array) {}

const arrayNumeros = [1, 2, 3, 4, 5, 6];

function verificaPares(elemento) {
  if (elemento % 2 == 0) {
    console.log(elemento);
  }
}

//arrayNumeros.forEach(verificaPares);
const novoArray = [];

arrayNumeros.forEach((numero) => {
  if (numero % 2 == 0) {
    console.log(numero);

    novoArray.push(numero); //construir um array com os pares
    console.log(novoArray);

    return numero;
  }
});

const arrayMarcas = [
  { marca: "Ford", modelo: "Focus", ano: "2001" },
  { marca: "Fiat", modelo: "Palio" },
  { marca: "Audi", modelo: "A3", ano: "2019" },
];

arrayMarcas.forEach((textString) => {
  console.log("Marca: " + textString.marca + " - modelo: " + textString.modelo);
});

function nome() {
  let nome = "Meu nome";
  return nome;
}

(nome) => {
  return (nome = "Meu nome");
};

//includes
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
//a comparação é case sensitive, tem que ser exatamente igual Cat NÃO É IGUAL cat
// expected output: true

console.log(pets.includes("aaat"));
// expected output: false

//MAP
const numeros = [1, 4, 9, 16];

const novosNumeros = numeros.map((num) => num * 2);

console.log(novosNumeros);

//SORT
const fruits = ["laranja", "melancia", "banana", "kiwi"];

console.log(fruits.sort());

function compararNumeros(a, b) {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
}

const numbers = [4, 12, 5, 2, 23];
console.log(numbers.sort());
console.log(numbers.sort(compararNumeros));

// programação funcional
// map, filter, reduce, sort => principais
// find, findIndex, some, every, foreach

// FIND
const products = [
  {
    id: 123,
    nome: "Notebook Dell Inspiron",
    preco: 5000,
    categorias: ["eletronicos", "notebooks", "computadores"],
    fabricante: "Dell",
  },

  {
    id: 456,
    nome: "Notebook Dell Vostro",
    preco: 3500,
    categorias: ["eletronicos", "notebooks", "computadores"],
    fabricante: "Dell",
  },

  {
    id: 789,
    nome: "Mochila para notebook",
    preco: 300,
    categorias: ["mochilas", "acessorios"],
    fabricante: "Seu Zé",
  },

  {
    id: 321,
    nome: "Caneca Kenzie versão dia dos pais exclusive",
    preco: 3000000,
    categorias: ["acessorios", "exclusivos"],
    fabricante: "Seu João",
  },
];

// let item = undefined;

// for (let i = 0; i < products.length; i++) {
//   let product = products[i];
//   if (product.categorias.includes("acessorios") && item === undefined) {
//     item = product;
//   }
// }

// function encontraAcessorio(element) {
//   if (element.categorias.includes("acessorios")) {
//     return true;
//   }

//   return false;
// }

// function encontraAcessorio(element) {
//   return element.categorias.includes("acessorios");
// }

// const encontraAcessorio = (element) => {
//   return element.categorias.includes("acessorios");
// };

// const encontraAcessorio = (element) =>
//   element.categorias.includes("acessorios");

// let item = products.find(encontraAcessorio);

// let item = products.find((item) => item.categorias.includes("acessorios"));
let item = products
  .reverse()
  .find((item) => item.categorias.includes("acessorios"));

console.log(item);

// FILTER
const filtrados = products
  .filter((item) => item.preco < 4000)
  .filter((item) => item.categorias.includes("acessorios"))
  .map((item) => item.nome);

console.log(filtrados);
