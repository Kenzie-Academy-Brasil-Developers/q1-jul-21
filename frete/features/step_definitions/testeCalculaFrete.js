const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

const Frete = require("./../../models/CalculaFrete")
const calculaFrete = new Frete()

Given('um valor total do pedido maior ou igual a {int} reais', function (int) {
    calculaFrete.valorPedido = int
});

When('calcular o frete do pedido', function () {
    calculaFrete.validaFrete()
});

Then('o valor do frete deve ser {int} reais', function (int) {
    let valorfrete = calculaFrete.validaFrete()
    assert.strictEqual(valorfrete,int)
});

Given('um valor total do pedido menor igual {float} reais', function (float) {
    calculaFrete.valorPedido = float
});


