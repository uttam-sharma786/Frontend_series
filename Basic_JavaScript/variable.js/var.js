
var a = 30; // global scope 
function number(){
    var a = 10;  // local scope
    console.log(a);
    var a = 20;
    console.log(a);
}
console.log(a);
number()
