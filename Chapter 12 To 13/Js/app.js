// Question 01
// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
// function checkInput(input) {
//     // Convert the input to its ASCII code
//     const charCode = input.charCodeAt(0);

//     if (charCode >= 65 && charCode <= 90) {
//         // Uppercase letter (A-Z)
//         console.log("Input is an uppercase letter.");
//     } else if (charCode >= 97 && charCode <= 122) {
//         // Lowercase letter (a-z)
//         console.log("Input is a lowercase letter.");
//     } else if (!isNaN(input)) {
//         // Numeric input
//         console.log("Input is a number.");
//     } else {
//         console.log("Invalid input. Please enter a valid character.");
//     }
// }
// // Example usage:
// const userInput = prompt("Enter a character:");
// checkInput(userInput);

// Question 02
// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
var num1, num2;

if (parseInt(num1, 10) > parseInt(num2, 10)) {
  console.log("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
} else if (parseInt(num2, 10) > parseInt(num1, 10)) {
  console.log("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
} else {
  console.log("The values " + num1 + " and " + num2 + " are equal.");
}

// Question 03
// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
var number = parseInt(prompt(`Please The Number To Check Positive Or Negative`));

if (number > 0) {
  console.log("Positive");
}else if(number === 0){
  console.log("Zero");
}else{
  console.log("Negative");
}

// Question 04
// 4. Write a program that takes a character (i.e. string of
//   length 1) and returns true if it is a vowel, false otherwise

var vowel = prompt(`Enter A Vowel Character`);

if(vowel === 'a', 'e', 'i', 'o', 'u'){
    alert(`true`)
}else{
    alert(`false Otherwise`)
}

// Question 05
// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

var correctPassword = "pakistan";

var userPassword = prompt("Please Enter Your Password");

if (userPassword === correctPassword) {
  alert("Correct! The password you entered matches the original password.");
} else {
  alert("Incorrect password.");
}

// Question 06   
// 6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) 
greeting = "Good day";
else{
greeting = "Good evening";
}
console.log(greeting)

// Question 07
// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var userInput = prompt(`Enter a Time in 24-hours`);

if(userInput >= '00' && userInput <= '04'){
    alert(`Good Night`)
}else if(userInput >= '05' && userInput <= '12'){
    alert(`Good Noon`)
}else if(userInput >= '13' && userInput <= '16'){
    alert(`Good Afternoon`)
}else if(userInput >= '17' && userInput <= '23'){
    alert(`Good Evening`)
}else{
    alert(`Please Enter A Time`)
};