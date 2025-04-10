// Events in JS
// let myfn = (name0) =>{

// } 
let myBtn = document.querySelector("#myBtn")
// myBtn.onclick = () => {
//     console.log("You clicked a button!")
// }

let myBody = document.querySelector("body")

// myBody.onmouseover = () => {
//     console.log("got you!")
// }

// event object bhi kuch hota ha check kar lena matlab events ka object hota ha jo unki cheeze save karke rakhta ha
// let myDblClickFn = () => {
//     console.log("This function will trigger when a user double clicked the button")
// }
// myBtn.addEventListener("click", () => {
//     console.log("Hello")
// })

myBtn.addEventListener("click", () => {
    console.log("btn clicked, hndlr 1")
})
myBtn.addEventListener("click", () => {
    console.log("btn clicked, hndlr 2")
})
let hndlr3 = () => {
    console.log("btn clicked, hndlr 3")
}
myBtn.addEventListener("click", hndlr3)

myBtn.addEventListener("click", () => {
    console.log("btn clicked, hndlr 4")
})
myBtn.removeEventListener("click", hndlr3)

// myBtn.addEventListener("dblclick", myDblClickFn)

