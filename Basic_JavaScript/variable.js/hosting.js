// var Name;
// console.log(Name)
// function greet(){
//     console.log("Hello",Name);
// }
// Name = "Ravi";
// greet();

/*
temporal dead zone" (TDZ) from the start of the block until the declaration is encountered. Accessing them before the declaration results in a ReferenceError
*/
let Name;
console.log(Name)
function greet(){
    console.log("Hello",Name);
}
Name = "Ravi";
greet();