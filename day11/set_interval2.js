console.log("Hello");
let intervalId = setInterval(() => {
  console.log("I am inside setTimeout Functions");
}, 2000); // Repeats after every 2s

console.log("After timeout");

console.log("Interval Id = ", intervalId);
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Stopped setInterval()");
}, 10000);
