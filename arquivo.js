//variavel - tipos/tipagem
// estrutura de repetição
// estruturas de decisão - OK
// estrutura de dados
// operadores -

// LET CONST

//variaveis sempre LET ou CONST
// operadores
// atribuição =
// comparação === !== <= >= < >

// 6 < 7 // true
// 6 < 6 // false

// 6 <= 7 // true
// 6 <= 6 // true

// && || !

// true && true => true
// true && false => false
// false && true => false
// false && false => false

// true || true => true
// true || false => true
// false || true => true
// false || false => false

// ! true => false
// ! false => true

let x = 5;
let y = 2;
let z = 'Letra';

let soma;

let soma = x + y / 2 * 7 + x - y;

// soma = 5 + 2;
// soma = 7;

//number = numeros
//string = letras/palavras
//boolean = verdadeiro ou falso / 1 ou 0

if (x === 1){
    return true;
}

function calculaTotal(pr, qtd) {
  let soma = 0;

  soma = pr * qtd;

  return soma;
}

let preco = 80;
let quantidade = 3;
let desconto = 0;
let total = calculaTotal(preco, quantidade);

if (total > 200) {
  desconto = 0.1;
}

let final = total * (1 - desconto);

let offerPeanutAndChocolateSpecialty = false;

let isAlergicToPeanuts = false;
let isChocolateLover = true;
let hasPositiveBalance = true;

if (!isAlergicToPeanuts && isChocolateLover) {
  offerPeanutAndChocolateSpecialty = true;
}
