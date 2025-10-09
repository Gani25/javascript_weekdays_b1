// Function -> REST PARAMS More than one arguments (...)
// REST params should be our last parameter

function demo(num, ...args) {
  console.log(num);
  console.log(args);
  console.log(typeof args);
}

demo(50, 9, 6, 3, 5, 8);
