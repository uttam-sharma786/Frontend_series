// Data types

// String: sequence of characters

let name1 ="Ravi";
console.log(name1);

let accountEmail = "ravi@gmail.com";
console.log(accountEmail);

let Book = "Harry Potter";
console.log(Book);

// Number: 1,2,3,4,5,6,7,8,9,0

let number = 455843759;
console.log(number);

let accountNumber = 2345678798765432;
console.log(accountNumber);

// Boolean: true or false
let isPresent = true;
console.log(isPresent);

let vote = false;
console.log(vote);

// BigInt

let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);

// Undefined: A variable that has been declared but not assigned a value is of type undefined.

let undefinedNumber;
console.log(undefinedNumber) 

// undefinedNumber = 124;
// console.log(undefinedNumber);

// Null: Represents the intentional absence of any object value. Example:

let nullValue = null; 
console.log(nullValue);

// null is a value that represents the absence of any object value.
let user = null;
let updatedUser = user;
updatedUser = "Ravi";
console.log(updatedUser);

// Symbol: A unique and immutable value primarily used as object property keys.

let uniqueKey = Symbol("number"); 
console.log(uniqueKey);

const uniqueId = Symbol('id');
const Id = {
  [uniqueId]: 12345,
  name: "John Doe",
  age: 30,
 
};

console.log(Id[uniqueId]);
console.log(Id.name);
console.log(Id.age);




// Undefined is used when a variable is declared but not assigned a value.
// Null represents an intentional absence of any object value.
// Symbol provides a way to create unique identifiers for object properties.
