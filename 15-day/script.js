// Objects | classes | inheritance
// classes and objects

const student = {
    name: "Piyush",
    marks: 94.4,
    printMarks: function() {
        console.log("Marks: ", this.marks)
    }

}

let arr = [ "apple", "mango", "lichi"]
arr.push("cucumber")

const employ = {
    calcTax () {
        console.log(`Tax rate is 17%`)
    },
    // calcTax2: function() {
    //     console.log(`Tax rate is 17%`)
    // },
}

const piyush = {
    salary: 50000,

}
const piyush1 = {
    salary: 50000,
    calcTax() {
        console.log(`Tax rate is 20%`)
    }

}
const piyush2 = {
    salary: 50000,

}
const piyush3 = {
    salary: 50000,

}

piyush.__proto__ = employ
piyush1.__proto__ = employ
piyush2.__proto__ = employ
piyush3.__proto__ = employ
// classes
// * 16:40 => https://youtu.be/N-O4w6PynGY?si=drMWz1ZsVUVp8SFM

class toyotaCar {
    start() {
        console.log(`start`)
    }
    stop() {
        console.log(`stop`)
    }

}
