// HOISTING

// function call
sayHello();

// function definition -> function declaration
function sayHello() {
  demo();
  console.log("Hello From Function");

  function demo() {
    console.log("I am Demo inside say Hello");
  }
}
