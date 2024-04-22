// // TODO: Question 01
// Q. Write a program that takes an array of numbers as input. Double each even number in the array and remove all odd numbers. Return the modified array.

function modifyArray(arr) {
    // Initialize an empty array to store modified numbers
    const modifiedArr = [];

    // Iterate over each number in the input array
    for (const num of arr) {
        // If the number is even, double it and add to the modified array
        if (num % 2 === 0) {
            modifiedArr.push(num * 2);
        }
    }

    return modifiedArr;
}

// Example usage
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = modifyArray(inputArray);
console.log(`Modified array: ${result}`);

// // TODO: Question 02
// Q.Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0

var capitalLetters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
var numbers = `1234567890`;

var password = prompt(`Enter A Password Following The Requirment`);

var minLength = false;
var capitalLetterHe = false;
var numberHe = false;

if (password.length >= 8) minLength = true
for (var i = 0; i < password.length; i++) {
    console.log(password[i]);
    if (capitalLetters.indexOf(password[i]) !== -1) {
        capitalLetterHe = true
    }
    if (numbers.indexOf(password[i]) !== -1) {
        numberHe = true
    }
}

if (minLength && capitalLetterHe && numberHe) {
    alert(`Its All Correct`);
} else {
    alert(`Please Follow The Password Requirment`);

}

// // TODO: Question 03
// Q.Write a program that takes two arrays of numbers as input and returns a new array containing only the elements that are present in both arrays. Use nested for loops to compare each element of the first array with each element of the second array.

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [3, 4, 5, 6, 7];

var arr3 = [];

for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {

        if (arr1[i] === arr2[j]) {
            arr3.push(arr1[i]);
        }
    }
}

console.log(arr3);

// // TODO: Question 04
// Write a program that takes a number as input and checks whether it is a prime number or not.

var number = prompt(`Enter A Number`);

var isPrime = true;

for (var i = 2; i < number; i++) {
    if (number % i === 0) {
        isPrime = false;
    }
}

if (isPrime) {
    alert(`${number} is a Prime Number`);
} else {
    alert(`${number} is not a Prime Number`);
}

// // TODO: Question 05
// Write a program that takes a nested array as input and flattens it into a single array. For example, if the input is [[1, 2], [3, 4], [5, 6]], the output should be [1, 2, 3, 4, 5, 6].

var arr = [[1, 2], [3, 4], [5, 6]];

var newArr = [];

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        newArr.push(arr[i][j]);
    }
}

console.log(newArr);