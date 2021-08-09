const lista = ["breja"];
// lista = ["breja", "coca"];

console.log("lista inical", lista);

lista[1] = "água";

console.log("lista com água", lista);

lista.push("coca");

console.log("lista com água e coca", lista);

lista[1] = "fanta";
lista = ["nova_lista", "coisa"]; // se lista for um const dá erro

console.log("lista troca água por fanta", lista);

lista.push(51);

console.log("com 10", lista);

console.log(typeof "Marco");
console.log(typeof 1);
