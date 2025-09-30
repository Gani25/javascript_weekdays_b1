// Create a function -> Takes a number and x iteration display table of number till x iteration

function displayTable(num, iter) {
  console.log(`Table of ${num} is`);
  for (let i = 1; i <= iter; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}

displayTable(5, 20);
