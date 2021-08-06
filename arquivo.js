//variavel - tipos/tipagem
//estrutura de repetição
//estruturas de decisão
//estrutura de dados


//variaveis sempre LET ou CONST


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

