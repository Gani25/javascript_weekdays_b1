// TRUE / FALSE -> If any 1 condition satisfies TRUE

let arr = [12, 18, 33, 6, 9];
// Check if any element in array is divisible by both 3 and 5
console.log(
  "Any Elements is divisible by 3 and 5 both of \n",
  arr,
  "\nis ? ",
  arr.some((element) => {
    return element % 3 == 0 && element % 5 == 0;
  })
);

arr = [12, 18, 33, 6, 9, 15];
// Check if any element in array is divisible by both 3 and 5
console.log(
  "Any Elements is divisible by 3 and 5 both of \n",
  arr,
  "\nis ? ",
  arr.some((element) => {
    return element % 3 == 0 && element % 5 == 0;
  })
);
