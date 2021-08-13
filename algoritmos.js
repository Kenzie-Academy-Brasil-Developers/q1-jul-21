/**
 * Joãozinho foi no mercado comprar maçãs e bananas.
 * Cada maça custa R$ 1,20. A dúzia de bananas custa
 * R$ 5,00. Ele comprou 8 maçãs e uma dúzia e meia de
 * bananas. Ele pagou com uma nota de R$ 20,00.
 * Quanto de troco que ele levou para casa?
 */

// primeiro multiplicar quantidade de maçãs pelo valor unitário
// depois somar a quantidade de uma dúzia inteira com o valor de meia dúzia
// somar total de maçãs com total do valor de bananas
// subtrair do dinheiro levado para obter o valor do troco

function calcChange(money, applesAmount, bananasAmount) {
  const applePrice = 1.2;
  const bananaPrice = 5.0;

  let totalApples = applesAmount * applePrice;
  let totalBananas = bananasAmount * bananaPrice;

  let total = totalApples + totalBananas;
  let change = money - total;

  return change;
}

calcChange(20, 8, 1.5);

/**
 * 1 - Entender o problema, incluindo o contexto. ANTES DE QQR COISA
 * 2 - Elaboram uma solução passo a passo. EM PORTUGUÊS.
 * 3 - Implementar o passo a passo em programação. (Nesse passo vocês podem identificar sub-problemas)
 * 4 - Testa. Em caso de falhas, repete processo. (Debug é aqui!)
 */

// "abcd" => ['a', 'b', 'c', 'd'];

let str = "abcd";
let arr = [];

for (let i = 0; i < str.length; i++) {
  arr.push(str[i]);
}

// arr[0]

// arr[0] =  nome
// arr[1] = sobrenome
// arr[2] = idade
// arr[3] = filhos
// arr[4] = casado ou não
// pessoa = ["Davis", "Peixoto", 3578, 3, true];
pessoa["nome"] = "Davis";

pessoa = {
  nome: "Davis",
  sobrenome: "Peixoto",
  idade: 3578,
  qtdFilhos: 3,
};

if (pessoa["qtdFilhos"] > 0) {
  // ativa seguro para dependentes
}

// function fazAlgo(obj) {
//   console.log(obj['nome'])
// }

// function escreveNome(nome) {
//   console.log(nome)
// }

// escreveNome(obj['nome']);
