// Functions with parameters
function additionTwo(a = 0, b = 0) {
  sum = a + b;
  console.log(`Addition of ${a}, ${b}  = ${sum}`);
}
function addition(c, a = 0, b = 0) {
  sum = a + b + c;
  console.log(`Addition of ${a}, ${b}, ${c}  = ${sum}`);
}

additionTwo(10, 2);
additionTwo();
addition(6, 5, 4);
addition(10);
