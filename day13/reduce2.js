let arr = [10, 50, -6, 100];

// Find Max
let max = arr.reduce((acc, cur) => {
  console.log("Acc -> ", acc);
  console.log("Cur -> ", cur);
  if (acc < cur) {
    return cur;
  } else {
    return acc;
  }
}, -Infinity);

console.log(max);
