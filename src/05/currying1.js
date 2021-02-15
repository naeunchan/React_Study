function multiply(a, b) {
  return a * b;
}

function multiplyTwo(a) {
  return multiply(a, 2);
}

const multiplyX = (x) => (a) => multiply(a, x);

const multiplyThree = multiplyX(3);
const multiplyFour = multiply(4);

const equation = (a, b, c) => (x) => x * x * b + c;
const formula = equation(2, 3, 4);
const x = 10;
const result = formula(x);

const mul = (a, b) => a * b;
const add = (a, b) => a + b;

const mulX = (x) => (a) => multiply(a, 2);
const addX = (x) => (a) => add(x, a);

const addFour = addX(4);
const mulTwo = mulX(2);
const mulThree = mulX(3);
const form = (x) => addFour(mulThree(mulTwo(x)));
