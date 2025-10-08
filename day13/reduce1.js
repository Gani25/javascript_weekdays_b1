// Reduce -> Return single values of shrink our array
/*
arr.reduce((accumuletor, current)=>{
    // Return Satetement
    }, initial value)
*/

let arr = [1, 2, 3, 4, 5];
// addition of all elements
let sum = arr.reduce((accumelator, current) => {
  console.log("------------------------------");
  console.log("Accumelator = ", accumelator);
  console.log("Current = ", current);
  return accumelator + current;
}, 0);

console.log("Addition of \n", arr, "\n is = ", sum);
