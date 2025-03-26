//. User Authentication

const isLoggedIn = true;
const userPermission = true;

if(isLoggedIn && userPermission ){
    console.log(" Access ok")
}else {
    console.log("Access denied")
}


// Form validation

const userPasswrod = 1234;
const userName = "Ravi ";

if(userPasswrod && userName){
    console.log("Form submitted")
}else {
    console.log("Please fill the form")
}


const userInput = null
const defautlValue = "Dafault Value"

const ValuetoUse = userInput || defautlValue

console.log(ValuetoUse.userInput)
console.log(ValuetoUse)