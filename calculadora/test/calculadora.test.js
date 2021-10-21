const {calculadora} = require("./../index")
const {add} = require("./../model/operacoes")

test('calculadora 1 + 2 to equal 3', () => {
    expect(calculadora(1, 2, add)).toBe(3);
});
