// Lexical Scope
/*
A variable defined outside of a function can be accessible 
inside another function call after the variable declaration
Note: The opposite is not true
*/

let x = 50;
function outsideMainFn() {
  function innerFn() {
    // let x = -5;
    console.log("Value of x inside inner = ", x);

    function innerDeep() {
      let num = 50000;
      console.log("Value of x in innerDeep = ", x);
      console.log("Value of num in innerDeep = ", num);
    }

    innerDeep();
    console.log("Value of num in inner function = ", num);
  }
  console.log("Value of x in outer function = ", x);
  innerFn();
  console.log("Value of num in outer function = ", num);
}
outsideMainFn();
