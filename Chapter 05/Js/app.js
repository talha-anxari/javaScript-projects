// Question 01
// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
var num1 = 5;
var num2 = 3;
var sum = num1 + num2;
console.log(`The Sum Of ${num1} and ${num2} Is ${sum}`);

// Question 02
// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
var num1 = 10;
var num2 = 5;

var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;

console.log(`The Subtraction Of ${num1} and ${num2} Is ${subtraction}`);
console.log(`The Multiplication Of ${num1} and ${num2} Is ${multiplication}`);
console.log(`The Division Of ${num1} and ${num2} Is ${division}`);
console.log(`The Modulus Of ${num1} and ${num2} Is ${modulus}`);

// Question 03
// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

var myVariable;
console.log(`Value after variable declaration is: ${myVariable}`);

myVariable = 5;
console.log(`Initial value: ${myVariable}`);

myVariable++;
console.log(`Value after increment is: ${myVariable}`);

myVariable += 7;
console.log("Value after decrement is: " + myVariable);

myVariable--;
console.log("Value after decrement is: " + myVariable);

var remainder = myVariable % 3;
console.log(`The remainder is : ${remainder}`);

// Question 04
// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie.

var ticketPrice = 600;
var totalCost = ticketPrice * 5;
console.log(`The total cost of buying 5 tickets is ${totalCost} PKR`);

// Question 05
// 5. Write a script to display multiplication table of any
// number in your browser.

for (var i = 1; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

var table = prompt(`If You Want Print A Table So Enter The Number`);
document.write(`Table Of ${table}`, `<br>`, `<br>`);
document.write(`${table} x 1 = ${table * 1}`, `<br>`);
document.write(`${table} x 2 = ${table * 2}`, `<br>`);
document.write(`${table} x 3 = ${table * 3}`, `<br>`);
document.write(`${table} x 4 = ${table * 4}`, `<br>`);
document.write(`${table} x 5 = ${table * 5}`, `<br>`);
document.write(`${table} x 6 = ${table * 6}`, `<br>`);
document.write(`${table} x 7 = ${table * 7}`, `<br>`);
document.write(`${table} x 8 = ${table * 8}`, `<br>`);
document.write(`${table} x 9 = ${table * 9}`, `<br>`);
document.write(`${table} x 10 = ${table * 10}`, `<br>`);

// Question 06
// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
var celsius = prompt(`Enter The Celsius Temperature`);
var fahrenheit = celsius * 9 / 5 + 32;
var celsius = fahrenheit - 32 * 5 / 9;
console.log(`NNoC is ${celsius}`);

var fahrenheit = prompt(`Enter The Fahrenheit Temperature`);
var celsius = (fahrenheit - 32) * 5 / 9;
console.log(`NNoF is ${celsius}`);

// Question 07
// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var price1 = 650;
var price2 = 100;
var quantity1 = 3;
var quantity2 = 7;
var shipping = 100;

var totalCost = price1 * quantity1 + price2 * quantity2 + shipping;
console.log(`The total cost is ${totalCost} PKR`);

// Question 08
// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var totalMarks = 980;
var marksObtained = 804;

var percentage = (marksObtained / totalMarks) * 100;
console.log(`The percentage is ${percentage} %`);

// Question 09
// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

const usDollars = 10;
const saudiRiyals = 25;
const usdToPkrRate = 104.80;
const sarToPkrRate = 28;

const totalPkr = (usDollars * usdToPkrRate) + (saudiRiyals * sarToPkrRate);
console.log("Total value in Pakistani Rupees:", totalPkr);

// Question 10
// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var num = 10;
num += 5;
num *= 10;
num /= 2;
console.log(num);

// Question 11
// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate

var currentYear = 2024;
var dob = 1997;
var age = currentYear - dob;
console.log(`The age is ${age}`);

// Question 12
// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var radius = 10;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * radius * radius;
console.log(`The circumference is ${circumference}`);
console.log(`The area is ${area}`);

// Question 13
// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.

var toffee;
var currentAge = 15;
var maxAge = 65;
var amountPerDay = 10;
toffee = currentAge * amountPerDay;
console.log(toffee);