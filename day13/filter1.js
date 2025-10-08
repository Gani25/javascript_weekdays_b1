let arr = [5, -4, 16, 1, 18, 7, 9, -8, 3, 2, 13, 4, 6, 8, 10];

// FILTER -> Returns array in which conditions are true
let evenElements = arr.filter((element) => {
  return element % 2 == 0;
});

console.log(evenElements);

let newPositiveEven = arr.filter((element) => {
  return element > 0 && element % 2 == 0;
});

console.log(newPositiveEven);
