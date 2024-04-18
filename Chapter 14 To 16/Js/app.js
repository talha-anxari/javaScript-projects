// Question 01
// 1. Declare an empty array using JS literal notation to store
// student names in future.

var empty = [];
console.log(empty);

// Question 02
// 2. Declare an empty array using JS object notation to store
// student names in future.

var empty = {};
console.log(empty);

// Question 03
// 3. Declare and initialize a strings array.

var strings = [];
console.log(strings);

// Question 04
// 4. Declare and initialize a numbers array.

var numbers = [];
console.log(numbers);

// Question 05
// 5. Declare and initialize a boolean array.

var boolean = [];
console.log(boolean);

// Question 06
// 6. Declare and initialize a mixed array.

var mixed = [];
console.log(mixed);

// Question 07
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

var qualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phil.",
  "PhD",
];
document.write(
  `<h1>available education qualifications in Pakistan</h1>`,
  `<br>`
);

document.write(`<ol>
    <li>${qualifications[0]}</li>
    <li>${qualifications[1]}</li>
    <li>${qualifications[2]}</li>
    <li>${qualifications[3]}</li>
    <li>${qualifications[4]}</li>
    <li>${qualifications[5]}</li>
    <li>${qualifications[6]}</li>
    <li>${qualifications[7]}</li>
</ol>`);

// for (var i = 0; i < qualifications.length; i++) {
//     document.write(`<li>${qualifications[i]}</li>`, `<br>`);
// }

// Question 08
// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

var studentsName = ["Micheal", "John", "Tony"];
var studentsScore = [80, 60, 45];
var totalMarks = 100;

console.log(
  `Score of ${studentsName[0]} is ${studentsScore[0]} Percentage: ${
    (studentsScore[0] / totalMarks) * 100
  }%`
);

console.log(
  `Score of ${studentsName[1]} is ${studentsScore[1]} Percentage: ${
    (studentsScore[1] / totalMarks) * 100
  }%`
);

console.log(
  `Score of ${studentsName[2]} is ${studentsScore[2]} Percentage: ${
    (studentsScore[2] / totalMarks) * 100
  }%`
);

// Question 09
// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

var colors = ["Red", "Green", "Blue", "Yellow"];

document.write(`<h1>color names</h1>`, `<br>`);

document.write(`<ol>
    <li>${colors[0]}</li>
    <li>${colors[1]}</li>
    <li>${colors[2]}</li>
    <li>${colors[3]}</li>
    </ol`);

document.write(`<h1>color names</h1>`, `<br>`);

document.write(`<ol>
    <li>${colors[0]}</li>
    <li>${colors[1]}</li>
    <li>${colors[2]}</li>
    <li>${colors[3]}</li>
</ol>`);

document.write(`<h1>color names</h1>`, `<br>`);

document.write(`<ol>
    <li>${colors[0]}</li>
    <li>${colors[1]}</li>
    <li>${colors[2]}</li>

    <li>${colors[3]}</li>
</ol>`);

document.write(`<h1>color names</h1>`, `<br>`);

document.write(`<ol>
    <li>${colors[0]}</li>
    <li>${colors[1]}</li>
    <li>${colors[2]}</li>

    <li>${colors[3]}</li>
</ol>`);

document.write(`<h1>color names</h1>`, `<br>`);

document.write(`<ol>
    <li>${colors[0]}</li>
    <li>${colors[1]}</li>
    <li>${colors[2]}</li>

    <li>${colors[3]}</li>
</ol>`);

document.write(`<h1>color names</h1>`, `<br>`);

document.write(`<ol>
    <li>${colors[0]}</li>
    <li>${colors[1]}</li>
    <li>${colors[2]}</li>

    <li>${colors[3]}</li>
</ol>`);

document.write(`<h1>color names</h1>`, `<br>`);

document.write(`<ol>
    <li>${colors[0]}</li>
    <li>${colors[1]}</li>
    <li>${colors[2]}</li>

    <li>${colors[3]}</li>
    </ol>`);

document.write(`<h1>color names</h1>`, `<br>`);

document.write(`<ol>
    <li>${colors[0]}</li>
    <li>${colors[1]}</li>
    <li>${colors[2]}</li>

    <li>${colors[3]}</li>
</ol>`);

document.write(`<h1>color names</h1>`, `<br>`);

document.write(`<ol>
    <li>${colors[0]}</li>
    <li>${colors[1]}</li>
    <li>${colors[2]}</li>

    <li>${colors[3]}</li>
</ol>`);

// Question 10
// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// TODO: Array ka sort method Array ko reverse me print karta hai
var scores = [80, 60, 45];

scores.sort();

console.log(scores);

// Question 11
// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
var cities = [`Karachi`, `Islamabad`, `Rawalpindi`, `Lahore`, `Sialkot`];

var selectedCities = cities.slice(2);
console.log(selectedCities);

// Question 12
// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = [
  "This ",
  " is ",
  " my ",
  " cat",
];

console.log(arr.join(""));

// Question 13
// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// Initialize an empty queue
var myQueue = [];

// Enqueue elements (add to the rear)
myQueue.push(10);
myQueue.push(20);
myQueue.push(30);

// Dequeue elements (remove from the front)
var firstElement = myQueue.shift(); // Removes 10
var secondElement = myQueue.shift(); // Removes 20

console.log("First element:", firstElement); // Output: 10
console.log("Second element:", secondElement); // Output: 20
console.log("Remaining queue:", myQueue); // Output: [30]


// Question 14
// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

// Initialize an empty queue

var myQueue = [];

// Enqueue elements (add to the rear)

myQueue.push(10);
myQueue.push(20);
myQueue.push(30);

// Dequeue elements (remove from the front)

var firstElement = myQueue.pop(); // Removes 30
var secondElement = myQueue.pop(); // Removes 20
var thirdElement = myQueue.pop(); // Removes 10

console.log("First element:", firstElement); // Output: 10

console.log("Second element:", secondElement); // Output: 20

console.log("Third element:", thirdElement); // Output: 30

console.log("Remaining queue:", myQueue); // Output: []

// Question 15
// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write(`<h1>phone manufacturers</h1>`, `<br>`);

document.write(`<ol>
    <li>${phoneManufacturers[0]}</li>
    <li>${phoneManufacturers[1]}</li>
    <li>${phoneManufacturers[2]}</li>
    <li>${phoneManufacturers[3]}</li>
    <li>${phoneManufacturers[4]}</li>
    <li>${phoneManufacturers[5]}</li>
</ol>`);






