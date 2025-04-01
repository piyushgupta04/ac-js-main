// alert('Hello Developer!');
console.log('Hello Developer!')

// variables
name = 'piyush';
age = 21;
price = 99.29;

console.log(name, age, price)

// null matlab khali cheez
x = null;
console.log(x);

// undefined matlab pata hi nahi ha kya ha isme
y = undefined;
console.log(y);

isFollow = false;
console.log(isFollow);

// let | variables that can not re-declared but can be updated (block scope)
// cost | variables can not be re-declared and updated (block scope)
// var | variables can be re-declared and updated (global scope)

let myName;
console.log(myName)
// ye undefined hoga kyunki hamne iski value assign hi nahi ki ha
// but ye cheez constant ke sath work nahi karti


console.log(typeof(myName)); // => ye cheez type check karti ha

// objects | collection of values

const student = {
    fullName: "Piyush Gupta",
    age: 21,
    isPass: true,
};

// accessing value of objects
console.log(student.fullName);

// practice set

const profile = {
    userName: "Piyush Gupta",
    post: 150,
    followers: 1000,
    following: 70,
    genericName: "piyushgupta",
    threadUserName: "the_piyush",
    profession: "Entrepreneur",
    userBio: "lorem10",
}