// Reference to an array

let arr1 = [5, 1, 7, 9, 3];

let arr2 = arr1;

console.log(arr1 == arr2);
console.log(arr1 === arr2);
console.log("Arr 1 = ", arr1);
console.log("Arr 2 = ", arr2);
arr2.push(50, 25);

console.log("After push");
console.log("Arr 1 = ", arr1);
console.log("Arr 2 = ", arr2);
