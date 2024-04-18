// Question 01
// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

var number = 10;

document.write(`<h1>Result</h1>`, `<br>`);
document.write(`The Value Of A is ${number}`, `<br>`);
document.write(`..........................`, `<br>`, `<br>`, `<br>`);

var number2 = ++number;

document.write(`The Value Of ++a is 11: ${number2}`, `<br>`);
document.write(`Now The Value Of a is 11: ${number}`, `<br>`, `<br>`, `<br>`);

var number2 = number++;

document.write(`The Value Of a++ is 11: ${number2}`, `<br>`);
document.write(`Now The Value Of a is 11: ${number}`, `<br>`, `<br>`, `<br>`);

var number2 = --number;

document.write(`The Value Of --a is 11: ${number2}`, `<br>`);
document.write(`Now The Value Of a is 11: ${number}`, `<br>`, `<br>`, `<br>`);

var number2 = number--;

document.write(`The Value Of a-- is 11: ${number2}`, `<br>`);
document.write(`Now The Value Of a is 11: ${number}`, `<br>`);

// Question 02
// 2. What will be the output in variables a, b & result after
// execution of the following script:

var a = 2, b = 1;
var result = (--a - --b) + ++b + b--;
console.log(result);

// Question 03
// 3. Write a program that takes input a name from user &
// greet the user.

var name = prompt("Enter your name");
alert(`Hello ${name}`);

// Question 04
// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var number = prompt("Enter a number", '5');
alert(number*5);

// Question 05
// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.

var math = prompt("Enter math subject");
var science = prompt("Enter science subject");
var english = prompt("Enter english subject");

var obtainMarks = math + science + english;
var totalMarks = 300;

var percentage = obtainMarks/totalMarks*100;

alert(percentage);

