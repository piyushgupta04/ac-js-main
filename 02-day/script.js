// Operators and conditional statements
// ! operators to google ya ai se dhek ke revise kar loge, vo itna kuch difficult nahi ha

// Conditional statement!
// A good real life example,

console.log(`
    .::                                     
    .::                                     
    .:: .::::      .: .::  .: .:::   .::    
    .::.::         .:  .::  .::    .::  .:: 
    .::  .:::      .:   .:: .::   .::    .::
.:   .::    .::     .:: .::  .::    .::  .:: 
.::::  .:: .::     .::     .:::      .::    
                   .::                      
   `);

//  !  if statement
//  !  if-else statement
//  !  else-it statement

// let mode = "default"
// let color;

// if(mode === "dark"){
//     color = "black"
//     console.log("the website will load in dark mode");
// } else {
//     console.log("unable to fetch dark mode, website will load in light mode!")
// }

let num = 4234;
if (num % 2 === 0) {
  console.log(num, "is even");
} else {
  console.log(num, "is odd");
}

// let's take another example of else-if statement.
let mode = "dark";
let color;

if (mode === "dark") {
  color = "black";
  console.log("User is viewing this website in", color, "mode");
} else if (mode === "blue") {
  color = "blue";
  console.log("User is viewing this website in", color, "mode");
} else {
  color = "default";
  console.log("User is viewing this website in", color, "mode");
}

// ternary operator
// condition ? trueOutput : falseOutput | basic syntax

// practice set
// ! Encountered a problem while using ternary operator, [lulz]
// let number = prompt("Enter a number: ");
// number % 5 ? console.log("Yes [number is a multiple of 5]") : console.log("No! [number is not a multiple of 5]");

// ! using it-else-
// let number = prompt("Enter a number: ");
// if (number % 5 === 0) {
//     console.log(number, "is a multiple of 5");
// } else {
//     console.log(number, "is a not a multiple of 5");
// }

// ! Loops- for, while, do while.
// for-of, for-in
// for-of
let str = "piyush_gupta";
for (let i of str) {
  console.log("characters are:", i);
}

// for-in loop
let obj = {
  name: "Piyush",
  course: "BCA",
  salary: 50000,
};

// ! practice set
// let sum = 0;
// // print even numbers btw 1-100
// for (i=0; i<=100; i++){
//     if (i%2 === 0){
//         console.log(i);
//         sum = sum + i;
//         // also let's try to sum em up!
//     }
// }
// console.log("sum:", sum)

// guess the number game,
// let guessNum = 30;
// let userNum = prompt("Start guessing the number by entering it down below: ");

// while(userNum != guessNum){
//     userNum = prompt("Opps, you entered a wrong number, Please try again: ");
// }
// console.log("Congratulations, You guessed the right number!");

// String
let str2 = "thisIsAString";
console.log(str.length);
console.log(str2[5]);
console.log(typeof str2);

// String Literals-
// let's create a simple template literals for str2
let newObj = {
  name: "the_real_noob",
  age: 21,
};
console.log(
  `This is a fking template literal where you can plug values like this ${str}, also you can plug objects like this ${newObj.name} and ${newObj.age}`
);

// * \n se next line create ho jati ha within output
// * \t ye tab space ko add kar deta ha,
// let's copy and try this on the string literals example

console.log(
  `This is a fking template literal where you can plug values like this ${str}, \nAlso you can plug objects like this ${newObj.name} and ${newObj.age}`
);

// String methods/ functions
// running owta time so just mentioning the topics here so that I don't forgot, altho I used this functions/ methods in another course

// str.toUpperCase();
// str.toLowerCase();
// str.trim();
// str.slice(start, end);
// str1.concat(str2);
// str.replace(searchVal, newVal);
// str.charAt(index);

// practice set
// let userName = prompt("Hello, Please enter your FullName to continue: ");
// let charLength = (userName.length);

// // now
// console.log(`Hello, @${userName}${charLength}`)

// Done another lecture!
console.log(
  `--------------------------------------------------------\n| Done another lecture and starting a new one on Day-2 |\n--------------------------------------------------------`
);

// Array
let myArr = ["one", "two", "three", "four", "five"];
console.log(myArr);
console.log(`length of array is ${myArr.length}`);

// changing value of array, let's change the value of myArr with something else

myArr[0] = "uno";
// console.log(myArr)

// ! Strings immutable hoti ha
// ! Arrays mutable hoti ha, matlab tum values ko access karke change kar sakte ho!

//looping array
for (idx = 0; idx < myArr.length; idx++) {
  // console.log(myArr[idx]);
}

// for of
for (let number of myArr) {
  // console.log(number.toUpperCase());
}

// practice set
// let marks = [45, 45, 76, 17, 65, 76];
// ye bana liya array
// avg nikalne ke liye total matlab length pata hona chaiye and in sab ka sum,
// pahle length nikal lete ha

// ! using for of loop
// let sumOfMarks = 0
// for (let number of marks){
//     sumOfMarks = sumOfMarks + number;
// }
// let avg = sumOfMarks/marks.length;
// console.log(`Average of marks is ${avg}`)

let items = [300, 340, 690, 313, 789];
for (i = 0; i < items.length; i++) {
  // console.log(i, items[i])
  let discount = items[i] / 10; // ye 10% nikal dega
  let offerValue = items[i] - discount;
  items[i] = offerValue;
}
console.log(items);

// Array methods!
//skipping to save time fr
// push()
// pop()
// toString()
// concat()
// unshift()
// shift()
// slice()
// splice()

// practice set
let companies = ["Microsoft", "Ola", "IBM", "Oracle", "Google"];
// what we have to do is- remove the first company from the array
// remove IBM and add Uber at it's place
// add Amazon at the end

companies.shift();
console.log(companies);

companies.splice(2, 0, "Uber");
console.log(companies);

companies.push("Amazon");
console.log(companies);

console.log(
  `--------------------------------------------------------\n| Done another lecture and starting a new one on Day-2 |\n--------------------------------------------------------`
);

// Functions in JS
// normal functions
// let's create a function for my work,
const endOfPart = function () {
  console.log(
    `--------------------------------------------------------\n| Done another lecture and starting a new one on Day-2 |\n--------------------------------------------------------`
  );
};

endOfPart();
// ye to ho gaya normal function,

// ! Arrow function
let myArrowFn = (x, y) => {
  console.log(`sum of ${x} and ${y} is ${x + y}!`);
};

let myMult = (a, b) => {
  console.log(a * b);
  return a * b;
};
// Practice set
// ek function create karna ha jo kissi bhi string ko as an arguement le aur uske no. of vovels ko print karde

let countVowel = function () {
  let str53 = "saymyname";
  let count = 0;
  // let str54 = prompt("Enter your string here: ");
  for (i = 0; i < str53.length; i++) {
    // str.charAt(index);
    // console.log(str53.charAt(i));
    if (
      str53.charAt(i) === "a" ||
      str53.charAt(i) === "e" ||
      str53.charAt(i) === "i" ||
      str53.charAt(i) === "o" ||
      str53.charAt(i) === "u"
    ) {
      count = count + 1;
      // console.log(count);
      // return count;
    }
  }
  return count;
};

// arrow fn for this problem

const myArrowVow = (str) => {
  let count = 0;
  for (i = 0; i < str.length; i++) {
    if (
      str.charAt(i) === "a" ||
      str.charAt(i) === "e" ||
      str.charAt(i) === "i" ||
      str.charAt(i) === "o" ||
      str.charAt(i) === "u"
    ) {
      count = count + 1;
      // console.log(count);
      // return count;
    }
  }
  return count;
};

// ! for each functions/ methods
// ye topic or aache se padhna ha aabhi

let myNewArr = [1, 54, 4, 34, 56, 435,]
myNewArr.forEach ((val,idx, arr) => {
  console.log(val * val)
  
})


// ye ek arrow fn ko bhi pass kara sakte the,
// let suppose
let myNewArrowFn = (x) => {
    console.log(`This is an arrow fn output which is ${x*x}`);
};
myNewArr.forEach(myNewArrowFn);

// ! maps
let arr1 = [45, 43, 75, 67, 76768, 224]
let newArr1 = arr1.map((val) => {
  return val * 2;
})

// ! filter
let evenArr1 = arr1.filter((val) => {
  return val % 2 === 0;
})

// console.log(evenArr1)

let storeArr = () => {
  console.log(`this is arrow function`)
}

/* 
! if you feel that you stuck on any topic, please go through and watch that topic rather then doing again from start!
link- https://www.youtube.com/watch?v=P0XMXqDGttU&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW&index=8
* 00:01 Functions in JavaScript are blocks of code that perform specific tasks.
* 01:59 Functions in JavaScript allow us to perform the same work repeatedly.
* 05:55 Functions in JavaScript are defined using the function keyword, followed by the function name, parentheses, and curly braces.
* 08:01 Function is defined but needs to be called to execute its code.
* 12:22 Understanding function parameters and arguments
* 14:31 Functions in JavaScript can take input, perform tasks, and return values.
* 18:27 Locals act like local variables
* 20:32 Introduction to Arrow Functions
* 24:18 Arrow functions in JavaScript are used for small tasks and can be stored inside variables.
* 26:06 Functions can be used to perform calculations and print values.
* 30:02 Count the occurrence of vowels in a given string
* 32:07 VS Code improved our code and introduced helpful extensions
* 36:09 Functions and methods in JavaScript
* 38:06 Functions in JavaScript can be passed as arguments to other functions.
* 41:51 Higher order functions are functions that call other functions or use a function as a parameter or return a function.
* 43:44 Print the square of each value in a given array of numbers using the forEach loop
* 47:23 The map function in JavaScript can be used to perform operations on each element of an array and generate a new array.
* 49:13 Functions and methods in JavaScript
* 52:47 Reduce method in JavaScript reduces an array to a single value
* 54:33 The code demonstrates the use of the reduce method in JavaScript to calculate the sum of an array.
* 58:12 JavaScript reduce method is used to find the largest element in an array.
* 59:57 Filter out marks of students that scored 90 plus
* 1:04:01 Use the reduce method to calculate the sum of numbers in the array
* 1:06:01 The video explains how to calculate the factorial of a number using JavaScript's reduce method.  
*/

// practice set
let marks = [54, 67, 87, 43, 91, 67, 94, 84]
let filterArr = marks.filter((mark) => {
  return mark > 90;
})

console.log(filterArr);

let n = prompt ("Enter a number: ")
let arr34 = []
for (i=1; i<=n; i++){
  arr34[i-1] = i
}
let sum = arr34.reduce((prev, curr) => {
  return prev + curr;
})
console.log(sum)

let factorial = arr34.reduce ((prev, curr) => {
  return prev * curr;
})
console.log(factorial)
