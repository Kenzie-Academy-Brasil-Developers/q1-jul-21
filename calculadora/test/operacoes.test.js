const {add,multiply,subtract} = require('../model/operacoes');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('multiply 2 * 2 to equal 4', () => {
    expect(multiply(2, 2)).toBe(4);
});

test('subtract 1 - 3 to equal -2', () => {
    expect(subtract(1, 3)).toBe(-2);
});