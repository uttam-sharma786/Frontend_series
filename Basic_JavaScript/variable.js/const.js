
/*
when working with objects and arrays where you want 
to prevent reassignment of the variable itself but allow mutation of the object or array.
*/
const user = {
    name: "Ravi",
    age: 23,
    email: "ravi@gmail.com"
}

user.age = 27;
console.log(user.age);



const arr = [1,2,3,4,5];
arr[2]= 10;
console.log(arr);

// const score = 100;
// score = 200;
// console.log(score);

function getScore(){
    const score = 200;
    console.log(score);
}
getScore();