/*
Methods:
1. A function that is define in javascript objects are called as methods
2. Actions that can be performed on objects
*/

let calculator = {
  division: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

console.log(calculator.power(3, 3));
console.log(calculator.multiply(3, 3));
console.log(calculator.division(10, 2));
