// Question 01
// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

var empty = [];
console.log(empty);

// Question 02
// 2. Declare and initialize a multidimensional array
// representing the following matrix:

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);

// Question 03
// 3. Write a program to print numeric counting from 1 to 10.

for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// Question 04
// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

var table = prompt(`If You Want Print A Table So Enter The Number`);
document.write(`Table Of ${table}`, `<br>`, `<br>`);

for (var i = 1; i <= 10; i++) {
    document.write(`${table} x ${i} = ${table * i}`, `<br>`);
}

// Question 05
// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

var fruits = [
    "apple",
    "banana",
    "mango",]
    for (var i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }

// Question 06
//  6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

var count = 1;
var reverseCount = 10;
var even = 0;
var odd = 1;
var series = 2000;

for (var i = 1; i <= 10; i++) {
    console.log(count);
    console.log(reverseCount);
    console.log(even);
    console.log(odd);
    console.log(series);
    count++;
    reverseCount--;
    even += 2;
    odd += 2;
    series += 2000;
}

// Question 07
// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

var A = [
    "cake",
    "apple pie",
    "cookie",
    "chips",
    "patties"
];

var search = prompt(`Enter The Item To Search`);
var searchItems = true;

for (var i = 0; i < A.length; i++) {
    if (A[i] === search) {
        alert(`The Item ${search} Is In The List`);
        searchItems = false;
    }
}
if (searchItems === true) {
    alert(`The Item ${search} Is Not In The List`);
}

// Question 08
// 8. Write a program to identify the largest number in the
// given array.

var checkLargeNum = [24, 53, 78, 91, 12];
var largeNum =  checkLargeNum[0];

for (var i = 0; i < checkLargeNum.length; i++) {
    if (checkLargeNum[i] > largeNum) {
        largeNum = checkLargeNum[i];
    }
}
console.log(largeNum);

// Question 09
// 9. Write a program to identify the smallest number in the
// given array.

var checkSmallNum = [24, 53, 78, 91, 12];
var smallNum =  checkSmallNum[0];

for (var i = 0; i < checkSmallNum.length; i++) {
    if (checkSmallNum[i] < smallNum) {
        smallNum = checkSmallNum[i];
    }
}
console.log(smallNum);

// Question 10
// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}