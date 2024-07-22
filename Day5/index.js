// 1 - fxn check even odd - function declaration

const n = 2;

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

checkEvenOdd(n);

// 2 - calculate square of a number - function declaration

function calcSquare(num) {
  let res = num * num;
  return res;
}

console.log(calcSquare(n));

// 3 - function expression - max of 2 numbers
const a = 2;
const b = 5;
const maxOfTwo = function (a, b) {
  if (a > b) {
    return `Max of ${a} and ${b} is ${a}`;
  } else return `Max of ${a} and ${b} is ${b}`;
};

console.log(maxOfTwo(a, b));

// 4 - function expression - concatenate 2 strings
const str1 = "First String";
const str2 = "Second String";

const concatenateStr = function (str1, str2) {
  return str1 + " " + str2;
};
console.log(concatenateStr(str1, str2));

// 5 - arrow fxn - sum of two numbers

const sumTwoNums = (a, b) => {
  return a + b;
};
console.log(sumTwoNums(a, b));

// 6 - arrow fxn - check if a string contains a specific char and return a boolean value

// const checkCharInString = (str, char) => str.includes(char);
const checkCharInString = (str, char) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return true;
    }
  }
  return false;
};
console.log(checkCharInString(str1, "i"));

// 7 - calculate product of two - take params - make second param default
const multiply = (a, b = 1) => a * b;
console.log(multiply(5));
console.log(multiply(5, 3));

// 8 - take name and age return greeting, take default age
const greet = (name, age = 24) => {
  return `Hello, ${name}! You are ${age} years old.`;
};
console.log(greet("Alice"));
console.log(greet("Bob", 25));

// 9 - higher order fxn that takes fxn and number and calls that fxns that no. of times

const repeatFunction = (func, n) => {
  for (let i = 0; i < n; i++) {
    func();
  }
};
const sayHello = () => console.log("Hello!");

repeatFunction(sayHello, 3);

// 10: higher order fxn that takes 2 fxns and a value and applies first function to value and 2nd fn to result

const hof = (fn1, fn2, value) => {
  return fn2(fn1(value));
};

const double = (num) => num * 2;

console.log(hof(calcSquare, double, 5));
console.log(hof(double, calcSquare, 5));
