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
let marks = [45, 45, 76, 17, 65, 76];
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
