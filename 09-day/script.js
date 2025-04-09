// ! DOM manipulation | Part 2
// * Get attribute and set attribute

// get attribute
let myDiv = document.querySelector("div")
let val= myDiv.getAttribute("id")
let name= myDiv.getAttribute("name")
console.log(val)
console.log(name)

// set attribute
console.log(myDiv.setAttribute("id", "myNewID"))

// style | node.style
// creating new element and addding them to the code

let myH2 = document.createElement("h2")
myH2.innerText = "This is my H2 element"
myH2.style.fontSize = "20px"
myH2.style.color = "white"
myH2.style.backgroundColor = "black"

// myDiv.append(myH2)
// myDiv.prepend(myH2)
// myDiv.before(myH2)
// myDiv.after(myH2)

// node.remove

// myDiv.remove()