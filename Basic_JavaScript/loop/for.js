// The for...in loop is used to iterate over the enumerable properties of an object.

const Student = {
    name:"Uttam",
    age:28,
    city:"Jaipur",
    email:"uttamsharm.8560@gmail.com"
}


for(value in Student){
    console.log(`${value}:${Student[value]}`)
}


// The for...of loop is used to iterate over iterable objects like arrays, strings, or other collections.

const fruits = ['apple', 'banana', 'cherry'];

for(key of fruits){
    console.log(`${key}`)
}