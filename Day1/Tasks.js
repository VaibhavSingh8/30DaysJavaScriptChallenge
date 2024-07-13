// Day 1: Variables and DataTypes

var firstVariable = 2;
console.log(firstVariable); // 2

var secondVariable = "string variable";
console.log(secondVariable); //string variable

const constantVariable = true;
console.log(constantVariable); // true

let thirdVariable = "hello";
console.log(thirdVariable); // hello

thirdVariable = "reassigned variable";
console.log(thirdVariable); //reassigned variable

constantVariable = "try const reassign";
console.log(constantVariable); //TypeError: Assignment to constant variable.
