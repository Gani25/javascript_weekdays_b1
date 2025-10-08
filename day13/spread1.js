let arr = [5, 1, 7, 9, 3];

let newArr = arr;

console.log("Array = ", arr);
console.log("New Array = ", newArr);

newArr.push(100);
console.log("Array = ", arr);
console.log("New Array = ", newArr);
// ...
console.log(...newArr);

let newArr1 = [...newArr];

console.log("New Array 1 = ", newArr1);
newArr1.push(-5555);
console.log("New Array 1 = ", newArr1);
console.log("New Array = ", newArr);
