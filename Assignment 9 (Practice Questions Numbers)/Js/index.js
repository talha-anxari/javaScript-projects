// //TODO: Question 01
// Write a function in JavaScript called roundNumber() that takes a number as input and returns the number rounded to the nearest integer.

var roundNumber = document.getElementById(`round_result`),
    randomNumber = document.getElementById(`random_num`);
function roundUp() {
  var result = Math.round(round_input.value);
  roundNumber.innerHTML = result;
}

// //TODO: Question 02
// Create a function called generateRandomInRange(min, max) that generates a random integer between min and max (inclusive) in JavaScript.
// Hint: You can use Math.random() to generate a random number between 0 and 1, then scale and shift it to fit within the specified range.

function generateRdmNum(){
   randomNumber.innerHTML = Math.floor(Math.random() * (100 - 1 + 1) + 1);
}



// //TODO: Question 03
// Write a JavaScript function called convertToNumber(str) that takes a string as input and converts it into a number. Ensure the function returns NaN if the string cannot be converted into a valid number.
// Hint: Look into the parseInt() and parseFloat() functions in JavaScript. Make sure to handle cases where the string is not a valid number.

function convertToNumber(str) {
  var result = parseInt(str);
  if (isNaN(result)) {
    result = parseFloat(str);
    if (isNaN(result)) {
      result = NaN;
    }
  }
  return result;
}

