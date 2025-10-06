// Anonymous Functions / Arrow Functions
/*
1. Arrow fns are used in higher order functions where we pass fn as an 
arguments
*/
/*

// Normal Syntax
let var = function(params){
    body
    }
// Arrow Syntax
const variable_name = (params) =>{
    // Function Body
    }
*/

const additionFn = function (n1, n2) {
  return n1 + n2;
};

// const addition = (n1, n2) => {
//   return n1 + n2;
// };

const addition = (n1, n2) => n1 + n2; // implictly return statements

// Here return is void so if we print cl(sayHello()) -> we get undefined
const sayHello = () => console.log("Hello World");
console.log(additionFn(1, 3));
console.log(addition(50, 60));
sayHello();
