const lista = [];

lista[0] = ["Isa", "Davis"];

lista[0][0]; // Isa

lista[0][1]; // Davis

delete lista[0];

const name = "Mateus";

lista[3] = name;

function maiorDeIdade(idade) {
  let ehMaior = "é menor";

  if (idade >= 18) {
    ehMaior = "é maior";
  }

  return ehMaior;
}
