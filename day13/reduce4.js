// Flatten array to single dimension
let arr = [[20, 30], [3, 10, 5], [2], [-6]];
// 20 30 3 10 5 2 -6

let singleDim = arr.reduce((acc, curArr) => {
  console.log("Acc = ", acc);
  console.log("Curr Arr = ", curArr);
  return acc.concat(curArr);
}, []);

console.log("Single Dim Array = ", singleDim);

/*
1. Check if all element in array are multiple of 10 or not
[10,100,90,60,30];
// if else
2. WAP to create a function which accepts array and return minimum element present in that array
function min(arr){
}
*/
