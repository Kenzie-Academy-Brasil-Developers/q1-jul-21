const predio = novoPredio();

novaPessoaPredio("Davis");

console.log(predio);

function novoPredio() {
  console.log("Criando novo predio");

  const predio = ["Luciana"];

  console.log("Predio criado", predio);

  return predio;
}

function novaPessoaPredio(nome) {
  predio.push(nome);
}
