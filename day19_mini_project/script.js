const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const upperCaseCheck = document.querySelector("#uppercase");
const lowerCaseCheck = document.querySelector("#lowercase");
const symbolsCheck = document.querySelector("#symbols");
const numbersCheck = document.querySelector("#numbers");

const lengthDisplay = document.querySelector("#lengthValue");

const inputSlider = document.querySelector("[dataLengthSlider]");

const generateBtn = document.querySelector("#generateBtn");

const passwordDisplay = document.querySelector("#passwordText");

const passwordStrengthIndicator = document.querySelector(".strength-bar");

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

// Shuffle Password
function shufflePassword(passwordArray) {
  for (let i = passwordArray.length - 1; i > 0; i--) {
    // Generate random index -> swap
    let j = Math.floor(Math.random() * (i + 1));

    // swap
    let temp = passwordArray[i];
    passwordArray[i] = passwordArray[j];
    passwordArray[j] = temp;
  }
  let stringPassword = "";
  passwordArray.forEach((singleChar) => {
    stringPassword = stringPassword + singleChar;
  });
  return stringPassword;
}

function setIndicatorColor(color) {
  passwordStrengthIndicator.style.background = color;

  passwordStrengthIndicator.style.boxShadow = "0px 0px 10px 1px";
}

function calculateStrenth() {
  let isUpper = false;
  let isLower = false;
  let isSymbol = false;
  let isNumber = false;

  if (upperCaseCheck.checked) {
    isUpper = true;
  }
  if (lowerCaseCheck.checked) {
    isLower = true;
  }
  if (symbolsCheck.checked) {
    isSymbol = true;
  }
  if (numbersCheck.checked) {
    isNumber = true;
  }
  if (isLower && isUpper && (isSymbol || isNumber) && passwordLength >= 8) {
    setIndicatorColor("green");
  } else if (
    (isLower || isUpper) &&
    (isSymbol || isNumber) &&
    passwordLength > 6
  ) {
    setIndicatorColor("yellow");
  } else {
    setIndicatorColor("red");
  }
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

let password;
generateBtn.addEventListener("click", () => {
  // check if no checkbox is seleted then do not perform anything
  if (checkboxCheckedCount <= 0) {
    // console.log("Nothing happend");
    return;
  }
  // Special Case when all checkbox selected but length of slider is less than checkbox selected
  if (passwordLength < checkboxCheckedCount) {
    passwordLength = checkboxCheckedCount;
    handleSlider();
  }

  // remove old password
  password = "";
  let functionArray = [];

  if (upperCaseCheck.checked) {
    functionArray.push(generateUpperCase);
  }
  if (lowerCaseCheck.checked) {
    functionArray.push(generateLowerCase);
  }
  if (symbolsCheck.checked) {
    functionArray.push(generateSymbol);
  }
  if (numbersCheck.checked) {
    functionArray.push(generateRandomNumber);
  }

  console.log("Array of Functions = ", functionArray);

  // Make sure all occurence of functionsArray should be added in password
  for (let fn of functionArray) {
    password = password + fn();
  }

  console.log("After running all checkbox functions = ", password);
  console.log(passwordLength);
  console.log(functionArray.length);
  for (let i = 0; i < passwordLength - functionArray.length; i++) {
    let randomIndex = getRandomInteger(0, functionArray.length);
    password = password + functionArray[randomIndex]();
  }
  // console.log(
  //   "After completing entire length of slider password --->  ",
  //   password
  // );

  // shuffle
  password = shufflePassword(Array.from(password));
  // console.log("After shuffle password = ", password);

  passwordDisplay.textContent = password;
  calculateStrenth();
});
