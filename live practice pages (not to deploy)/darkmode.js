let myBtn = document.querySelector("button")
let myBody = document.querySelector("body")
let currMode = "light"
let darkModeFn = (evt) => {
    myBody.style.backgroundColor = "black"
    myBody.style.color = "white"
    myBtn.style.backgroundColor = "white"
    myBtn.style.color = "black"
    console.log(evt)
}

let modeChecker = () => {
    console.log(`You are currently in ${currMode} mode`)
    if (currMode === "light") {
        currMode = "dark"
        myBody.classList.add("bg-black", "text-white")
        myBody.classList.remove("bg-white", "text-black")
        myBtn.classList.add('bg-white', 'text-black')
        myBtn.classList.remove('text-white', 'bg-black')
        console.log(`Switched to ${currMode} mode`)
    }
    else {
        currMode = "light"
        myBody.classList.add("bg-white", "text-black")
        myBody.classList.remove("bg-black", "text-white")
        myBtn.classList.remove('bg-white', 'text-black')
        myBtn.classList.add('text-white', 'bg-black')
        console.log(`Switched to ${currMode} mode`)
    }
}

myBtn.addEventListener("click", modeChecker)
