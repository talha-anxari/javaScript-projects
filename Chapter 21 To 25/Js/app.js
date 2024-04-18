// // TODO: Question 01
// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

var fname = prompt(`Please Enter Your First Name`);
var lname = prompt(`Please Enter Your Last Name`);
var fullName = fname + " " + lname;

alert(`Hello ${fullName}`);

// // TODO: Question 02
// Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

var favMobile = prompt(`Please Enter Your Favorite Mobile Phone Model`);
var length = favMobile.length;
document.write(`My Favorite Phone is: ${favMobile} <br> Length of String: ${length}`);

// // TODO: Question 03
// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

var word = "Pakistani";
var index = word.indexOf("n");
document.write(`String: ${word} <br> Index of 'n': ${index}`);

// // TODO: Question 04
// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
var word = "Hello World";
var index = word.lastIndexOf("l");
document.write(`String: ${word} <br> Last Index of 'l': ${index}`);

// // TODO: Question 05
// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

var word = "Pakistani";
var index = word.charAt(3);
document.write(`String: ${word} <br> Character at Index 3: ${index}`);

// // TODO: Question 06
// 6. Repeat Q1 using string concat() method.

var fname = prompt(`Please Enter Your First Name`);
var lname = prompt(`Please Enter Your Last Name`);

var fullName = fname.concat(" ", lname);
alert(`Hello ${fullName}`);

// // TODO: Question 07
// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

var replace = "Hyderabad";
var replace = replace.replace("Hyderabad", "Islamabad");
document.write(`City: ${replace} <br> After Replacement: ${replace} <br>`);

// // TODO: Question 08
// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

var message = "Ali and Sami are best friends. They play cricket and football together.";
var replace = message.replace(/and/g, "&");
document.write(`Message: ${message} <br> After Replacement: ${replace} <br>`);

// // TODO: Question 09
// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

var value = "472";
var value = parseInt(value);
document.write(`Value: ${value} <br> Type: ${typeof value} <br>`);

// // TODO: Question 10
// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

var input = prompt("Enter Any Word");
var input = input.toUpperCase();
document.write(`User Input: ${input} <br> Upper Case: ${input} <br>`);

// // TODO: Question 11
// 11. Write a program that takes user input. Convert and
// show the input in title case.

var input = prompt("Enter Any Word");
var input = input.toLowerCase();

document.write(`User Input: ${input} <br> Title Case: ${input} <br>`);

// // TODO: Question 12
// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var string = "35.36";
var string = string.replace(".", "");
document.write(`Number: ${string} <br> Result: ${string} <br>`);

// // TODO: Question 13
// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

var username = prompt("Enter Your Username");

for (var i = 0; i < username.length; i++) {
    if (username.charCodeAt === 33 || username.charCodeAt === 44 || username.charCodeAt === 46 || username.charCodeAt === 64) {
        alert("Please Enter a valid username");
    }
};

// // TODO: Question 14

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
for (var i = 0; i < A.length; i++) {
    if (userInput === A[i]) {
        alert(`${userInput} is available at index ${i} in our bakery`);
        break;
    } else {
        alert(`We are sorry. ${userInput} is not available in our bakery`);
        break;
    }
}

// // TODO: Question 15
// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

var password = prompt("Enter Your Password");

if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
    alert("Password can not begin with a number");
} else if (password.length < 6) {
    alert("Password must be at least 6 characters long");

} else{
    alert("Your password is valid");
}

// // TODO: Question 16
// 16. Write a program to convert the following string to an
// array using string split method.

var university = "University of Karachi";
var split = university.split("");
for (var i = 0; i < split.length; i++) {
    document.write(split[i] + "<br>");
}
// // TODO: Question 17
// 17. Write a program to display the last character of a user
// input.

var userInput = prompt("Enter Your Name");
var lastChar = userInput.charAt(userInput.length - 1);
document.write("User Input: " + userInput + "<br>");
document.write("Last Character of input: " + lastChar);

// // TODO: Question 18
// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

var string = "The quick brown fox jumps over the lazy dog";
var count = 0;
for (var i = 0; i < string.length; i++) {
    if (string.slice(i, i + 3) === "the") {
        count++;
    }
}
document.write("Text: " + string + "<br>");
document.write("There are " + count + " occurrence(s) of word 'the'");