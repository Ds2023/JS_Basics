let name = 'nduti';
console.log(name);

// cannot be a reserved keyword
// should be meaningful
// cannot start with a number
// cannot contain a space or hyphen(-)
// Camel case notation
// are case sensitive

let firstName = 'Victor';
let lastName = 'Nduti';
console.log(firstName,lastName)

// Constants
// We can't reassign
const interestRate = 0.3;
interestRates = 1;
console.log(interestRate);

//Primitive types
let nameTwo = 'Nduti'; // string
let age = 30; // number literal
let isApproved = true; // boolean
let firstNames = undefined;
let lastNames = null; //leaves the variable name open

//Objects
// multiple related variables
// instead of these variables we can use an object

let person = {
    name: 'Victor',
    age:30
}
console.log(person);

//Dot notation
person.name = 'Nduti';
console.log(person.name);

//Bracket Notation
person['name'] = 'Maina';
console.log(person.name)

//Let's say we're building an app that requires a user to key in the name
// we don't know the name
// dynamic programming comes in place
// it is selected at runtime
// determining the target of the user
// eg they want the name

let selection = 'name';
person[selection] = 'Mary';

console.log(person.name)

//Arrays
let selectedColors = ['red','blue'];
selectedColors[2] = 'green';
selectedColors[3] = 2;
console.log(selectedColors);
console.log(selectedColors.length);

//Functions
//Performing a task
// add parameters eg name
function greet(name,lastName) {
    console.log('Hello ' + name + ' ' + lastName);

}

//pass arguments eg 'Nduti
greet('Nduti','Smith');
greet('Vic');

//calculating a value
function square(number) {
    return number*number;
}

let number = square(2);
console.log(number);

//in the above we are calling the log function
// then calling a square function