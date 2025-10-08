// every -> true / false -> if all conditions are true

let arr = [10, 18, 2, 4, 6, 12];

// Check if all elements are even or not?

console.log(
  "All Elements of \n",
  arr,
  "\nis even ? ",
  arr.every((element) => {
    return element % 2 == 0;
  })
);

arr = [5, -3, 10, 18, 2, 4, 6, 12];

console.log(
  "All Elements of \n",
  arr,
  "\nis even ? ",
  arr.every((element) => {
    return element % 2 == 0;
  })
);
