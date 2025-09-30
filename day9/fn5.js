// Accept 5 number and return average
function calculateAverage(n1, n2, n3, n4, n5) {
  sum = n1 + n2 + n3 + n4 + n5;
  avg = sum / 5;
  return avg;
}

console.log(calculateAverage(50, 60, 50, 60, 50));

// function which accept array -> return single string
function join(arr) {
  let str = "";
  for (let name of names) {
    str = str + name;
    str = str + " ";
  }
  return str;
}
let names = ["Pranjal", "Akshata", "Shubham", "Abdul"];

console.log(names);
console.log(join(names));
