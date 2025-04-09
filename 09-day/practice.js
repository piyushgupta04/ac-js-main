let myBtn = document.createElement("button")
myBtn.innerText = "Click me"
myBtn.style.backgroundColor = "red"
myBtn.style.color = "white"

// let myBody = document.querySelector("body")
// console.dir(myBody)
// console.log(myBody)

document.querySelector("body").prepend(myBtn)

let myP = document.querySelector("p")
myP.classList.add("hello")
