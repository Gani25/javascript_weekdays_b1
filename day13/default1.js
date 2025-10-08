// Function with default values
function power(num, power = 1) {
  console.log("Value of power = ", power);
  console.log("Value of number = ", num);
  console.log(num ** power);
}

power(5, 3);
power(5);
