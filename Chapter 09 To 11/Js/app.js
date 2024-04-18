// Question 01
// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var city = prompt(`Please Enter The City Name`);

if (city === "Karachi") {
    alert(`Welcome to city of ${city}`);
}

// Question 02
// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender = prompt(`Please Enter Your Gender`);

if(gender === `Male`){
    alert(`Good Morning Sir`);
}else if(gender === `Female`){
    alert(`Good Morning Ma’am`);
}else{
    alert(`Please Enter Your Gender`);
};

// Question 03
// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

var color = prompt(`Please Enter A Traffic Signal Color`);

if(color === `Red`){
    alert(`Must Stop`);
}else if(color === `Yellow`){
    alert(`Ready To Go`);
}else if(color === `Green`){
    alert(`Go Now`);
}else{
    alert(`Please Enter A Traffic Signal Color`);
}

// Question 04
// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

var fuel = prompt(`Please Enter Your Fuel In Litres`);

if(fuel > 0.25){
    alert(`Still You Drive`);
}else if(fuel < 0.25){
    alert(`Please refill the fuel in your car`);
}else{
    alert(`Please Enter Your Fuel In Litres ${fuel}`);
}

// Question 05
// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// b. 
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// c. 
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is false");
}
if(c === 14){
alert("condition 4 is true");
}
// d. 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// e. 
if (true){
alert("True");
}
if (false){
alert("False");
}
// f. 
if("car" < "cat"){
alert("car is smaller than cat");
}

// Question 06
// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

var marks = prompt(`Please Enter Your Marks`);

if(marks >= 90){
    alert(`Your Grade is A`);
}else if(marks >= 80){
    alert(`Your Grade is B`);
}else if(marks >= 70){
    alert(`Your Grade is C`);
}else if(marks >= 60){
    alert(`Your Grade is D`);
}else if(marks >= 50){
    alert(`Your Grade is E`);
}else{
    alert(`Your Grade is F`);
}

// Question 07
// 7. Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secretNumber = Math.floor(Math.random() * 10) + 1;

var guess = prompt(`Please Enter Your Guess`);

if(guess === secretNumber){
    alert(`Bingo! Correct answer`);
}else if(guess === secretNumber + 1){
    alert(`Close enough to the correct answer`);
}else{
    alert(`Please Enter Your Guess`);
}

// Question 08
// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var num = prompt(`Please Enter The Number`);

if(num % 3 === 0){
    alert(`${num} is divisible by 3`);
}else{
    alert(`${num} is not divisible by 3`);
}
// Question 09
// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var num = prompt(`Please Enter The Number`);

if(num % 2 === 0){
    alert(`${num} is an Even Number`);
}else{
    alert(`${num} is an Odd Number`);
}

// Question 10
var temp = prompt(`Please Enter The Current Temperature`);

if(temp >= 40){
    alert(`It is too hot outside.`);
}

if(temp >= 30){
    alert(`“The Weather today is Normal.”`);
}
if(temp >= 20){
    alert(`Today’s Weather is cool.`);
}
if(temp <= 10){
    alert(`OMG! Today’s weather is so Cool.`);
}
else{
    alert(`Please Enter The Valid Question`)
}

// Question 11
// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var a = prompt(`Please Enter The First Number`);
var b = prompt(`Please Enter The Second Number`);
var c = prompt(`Please Enter The Operation (+, -, *, /, %)`);

if(c === `+`){
    alert(`${a} + ${b} = ${a + b}`);
}

if(c === `-`){
    alert(`${a} - ${b} = ${a - b}`);
}

if(c === `*`){
    alert(`${a} * ${b} = ${a * b}`);
}

if(c === `/`){
    alert(`${a} / ${b} = ${a / b}`);
}

if(c === `%`){
    alert(`${a} % ${b} = ${a % b}`);
}
