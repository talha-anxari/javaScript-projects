// Question 01
// Write a loop to print numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Question 02
// Write a loop to print even numbers from 1 to 20.

for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log('Even Number ', i)
    }
}

// Question 03
// Write a loop to print odd numbers from 1 to 20.

for (var i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log('Odd Number ', i)
    }
}

// Question 04
// • Write a loop to calculate and print the factorial of a number (let's say 5).

var factorial = 1;

for (var i = 1; i <= 5; i++) {
    factorial = factorial * i;
}

console.log(factorial);

// Question 05
// • Write a loop to print the multiplication table of a number (let's say 7) up to 10.

var table = 7;
for (var i = 1; i <= 10; i++) {
    console.log(table +' x '+ i +' = ', i * 7);
}

// Question 06
// • Write a loop to print the Fibonacci series up to the 10th term. (The Fibonacci sequence is a type series where each number is the sum of the two that precede it. It starts from 0 and 1 usually. The Fibonacci sequence is given by 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, and so on.-10)

for (var i = 0; i <= 10; i++) {
    console.log(i +' = ', i * 2 + i);
}

// Question 07
// Write a loop to print the reverse of a string (let's say "hello").

var strArr = 'hello'.split('')
var strArrRev = strArr.reverse()
var strArrJoin = strArrRev.join('')
console.log(strArrJoin)

// Question 08
// • Write a loop to print the square of numbers from 1 to 10.

for(var i = 1; i <= 10; i++){
    console.log(i * i);
}

// Question 09
// • Write a loop to find and print the smallest element in an array (let's say [3, 7, 2, 9, 5]).

var arr = [3, 7, 2, 9, 5]
var min = arr[0]
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i]
    }
}

console.log(min)

// ----------------------- Practice ------------------------

//1
//12
//123
//1234
//12345
//123456
//1234567
//12345678
//123456789

//*
//**
//***
//****
//*****
//******

var stringPrint = prompt(`Can You Write A Number`);

for (var i = 0; i <= 10; i++) {
    console.log(stringPrint * i);
}

//1,3,6,10,15,21,28,36,45

var num = 0;

for (var i = 0; i <= 10; i++) {
    num = num + i;
}

console.log(num);

// Write a loop to print reverse numbers from 1 to 10.

for(var i = 1; i <= 10; i++){
    console.log(10 - i);
}

var string = prompt(`You Can Check Your Word Palindrome Or Not`);
