const num1 = 15;
const num2 = 7;

// Task 1
function addTwoNumbers(a, b) {
  return a + b;
}

const result = addTwoNumbers(num1, num2);

console.log(`Addition ${result}`);

// Task 2
function subtractTwoNumbers(a, b) {
  return a - b;
}

const res1 = subtractTwoNumbers(num1, num2);

console.log(`Subtract ${res1}`);

// Task 3
function multiplyTwoNumbers(a, b) {
  return a * b;
}

const res2 = multiplyTwoNumbers(num1, num2);

console.log(`Multiply ${res2}`);

// Task 4
function divideTwoNumbers(a, b) {
  return a / b;
}

const res3 = divideTwoNumbers(num1, num2);

console.log(`Divide ${res3}`);

// Task 5
function remainder(a, b) {
  return a % b;
}

const res4 = remainder(num1, num2);

console.log(`Remainder ${res4}`);

// Task 6
let var1 = 8;
const var2 = 5;
var1 += var2;
console.log(var1);

// Task 7
var1 -= var2;
console.log(var1);

// Task 8
const varCompare = var1 < var2;
console.log(varCompare);

const varCompare2 = var1 > var2;
console.log(varCompare2);

// Task 9
const var3 = 13;
const var4 = 14;

const varCompare3 = var4 <= var3;
console.log(varCompare3);

const varCompare4 = var4 >= var3;
console.log(varCompare4);

// Task 10
const var5 = 15;
const var6 = "15";

const compareDoubleEqual = var6 == var5;
const compareTripleEqual = var6 === var5;
console.log(compareDoubleEqual);
console.log(compareTripleEqual);

// Task 11
const v1 = 12;
const v2 = 10;
const common = 11;

if (v1 > common && v2 < common) {
  console.log("Condition success");
} else {
  console.log("Condition failed");
}

// Task 12

if (v1 > common || v2 > common) {
  console.log("At least one success");
} else {
  console.log("No case success");
}

// Task 13
if (!(v1 > common)) {
  console.log(`${v1} is not greater than ${common}`);
} else {
  console.log(`${v1} is greater than ${common}: Condition failed`);
}

// Task 14
const tryNum = -5;
const checkNegative = tryNum >= 0 ? "positive" : "negative";
console.log(checkNegative);
