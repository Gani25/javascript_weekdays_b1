const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const upperCaseCheck = document.querySelector("#uppercase");
const lowerCaseCheck = document.querySelector("#lowercase");
const symbolsCheck = document.querySelector("#symbols");
const numbersCheck = document.querySelector("#numbers");

const lengthDisplay = document.querySelector("#lengthValue");

const inputSlider = document.querySelector("[dataLengthSlider]");

const symbols = "!@#$%^&*()_+?><{}[]:";
// Utility Functions
// Number
function getRandomInteger(min, max) {
  // min = 1, max = 9 -> floor(0.6 * (9 - 1)) + 1
  // floor(4.8)+1 => 4 + 1 = 5
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
  return getRandomInteger(0, 10);
}
// Lower Case
function generateLowerCase() {
  let randomDecimalNumber = getRandomInteger(97, 123);
  return String.fromCharCode(randomDecimalNumber);
}
// Upper Case
function generateUpperCase() {
  let randomDecimalNumber = getRandomInteger(65, 91);
  return String.fromCharCode(randomDecimalNumber);
}
// Special Characters
function generateSymbol() {
  let randomDecimalNumber = getRandomInteger(0, symbols.length);
  return symbols.charAt(randomDecimalNumber);
}

// Setting Default Value of password length to 10
let passwordLength = 10;

// Intial value in html is 1 thats why changing to 10 by calling function
handleSlider(); // Call

// Function which will handle password length and slider movement
function handleSlider() {
  inputSlider.value = passwordLength;
  lengthDisplay.textContent = passwordLength;
}

let checkboxCheckedCount = 0;
// Checkbox Count
function handleCheckboxChange() {
  checkboxCheckedCount = 0;
  allCheckBox.forEach((checkbox) => {
    if (checkbox.checked) {
      checkboxCheckedCount++;
    }

    // if length = 1 and checkbox selected are 4
    if (passwordLength < checkboxCheckedCount) {
      passwordLength = checkboxCheckedCount;
      handleSlider();
    }
  });
}

allCheckBox.forEach((checkbox) => {
  checkbox.addEventListener("change", handleCheckboxChange);
});

// Add Event Listner -> on input on slider
inputSlider.addEventListener("input", (event) => {
  //   console.log(event);
  passwordLength = event.target.value;
  handleSlider();
});
