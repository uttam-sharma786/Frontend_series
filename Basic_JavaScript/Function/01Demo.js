// Function Decelaration,function expression, reutrn , Parameters

function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

function Mul(x,y){
    return x*y
}
const res  = add(5,3)
const subr = sub(56,45)
console.log(res,subr)

console.log(Mul(3,5))

// Function Expression
const calculateTotalPrice = function (price,quantity) {
    return price* quantity
}

console.log(calculateTotalPrice(4,6))

// arrow functions, function scope, and closures
//  lexical scope of this

addSum = (x,z) => {
    return x**z
}

addSum()

// map

const listname = ['Ravi','Shiva','Raju']


listname.unshift("Hritik")
listname.pop()
listname.shift()
const greet = listname.map((users) => `Hello, ${users}` )

console.log(greet)

function listofPerson() {
   //function scop
}