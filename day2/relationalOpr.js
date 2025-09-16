let num1 = 5;
let num2 = 3;

console.log("Relational Operator(>, <, >=, <= , ==, !=, ===,!==)");

console.log(`Greater than (>) ${num1} > ${num2} = ${num1 > num2}`);

console.log(`Less than (<) ${num1} < ${num2} = ${num1 < num2}`);
console.log(`Greater than or equal to(>=) ${50} >= ${50} = ${50 >= 50}`);
console.log(`Less than or equal to (<=) ${num1} <= ${num2} = ${num1 <= num2}`);

num1 = 10;
num2 = "10";
console.log(
  `double equal to(==) loose checking ignore data type: ${num1} == ${num2} = ${
    num1 == num2
  }\nType of num1 = ${typeof num1} and type of num2 = ${typeof num2}`
);
console.log(
  `Triple equal to(===) tightly checking consider data type: ${num1} === ${num2} = ${
    num1 === num2
  }\nType of num1 = ${typeof num1} and type of num2 = ${typeof num2}`
);
