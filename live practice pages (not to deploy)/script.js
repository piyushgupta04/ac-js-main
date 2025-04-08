// const h3 = document.getElementsByTagName("h3")
// * alert("Hello Codersssss!")
// * document.getElementById
// * document.getElementsByClassName
// * document.getElementsByTagName

// * Window Object
// console.log(window)
// console.log("Hello")
// window.console.log("Hello")

// * We have something called console.dir, ye basically kissi bhi oject ki properties print karwa deta ha (check more on mdn reference!)

// * document.body.style.background = "red"
// let myH3 = document.getElementById("myH3")
// console.dir(myH3)
// let myPs = document.getElementsByClassName("my-p")
// console.dir(myPs)
// console.log(myPs)

// * document.querySelector
// * document.querySelectorAll

// ! DOM MANIPULATION
/* 
* tagName
* innerText
* innerHTML
* textContent
*/

// ! --------------------------------------------
// * accessing html in js
// console.dir(window.document.body);
console.dir(document.body);
console.log(document.body);
// window glbal object ha issi liye usko likhna na likna sab barabar ha.

let myPs = document.getElementsByClassName("my-p")
console.dir(myPs)
console.log(myPs)
console.log("HTML COLLECTION IS VERY SIMILAR TO ARRAY")

// ! Continue from: https://youtu.be/7zcXPCt8Ck0?si=OtmmXS0XMl5sfNd3&t=2605

// using tagname
let parahs = document.getElementsByTagName("p")
console.dir(parahs)

// Query selector
let elements = document.querySelector("p") // 1st element
console.dir(elements)

// ! DOM MANIPULATION
/* 
* tagName
* innerText
* innerHTML
* textContent
*/

// MDN fist last child sibling [ text, comment, element ]

// tagName
let f1Btn = document.getElementById("myBtn");
console.dir(f1Btn)

let myDiv = document.querySelector(".my-div");
console.dir(myDiv)
// innerText
// innerHTML
// script.js:35 body
// myDiv.innerHTML = "<div> Hello World, from Console </div>"
// Output: '<div> Hello World, from Console </div>'
// innerContent | ye basically jo cheese hidden hoti ha html pe ye unko bhi print karra det ha, innerText jaisa hi work karta ha but hidden contents bhi print karra deta ha!


// ! Practice ...
let h2 = document.querySelector("h2")
h2.innerText = h2.innerText + " from Aapna College"

let boxes = document.getElementsByClassName("box")
console.dir(boxes)
// boxes[0].innerHTML = "<i>Hello</i>"
// boxes[1].innerHTML = "<b>Hello</b>"
// boxes[2].innerHTML = "<strong>Hello</strong>"

// yahi same kaam me code ke through bhi kar sakta hu
// ! yaha code revise karke loop bana ke karo yahi same cheez
// lecture khatam!
// lecture 6 khatam!, bass ye practice wala revise karke karlo