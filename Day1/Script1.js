const num = 1; // number
console.log(`Value: ${num}, Type: ${typeof num}`);

const stringVar = "String Hello"; // string
console.log(`Value: ${stringVar}, Type: ${typeof stringVar}`);

const bool = true; // boolean
console.log(`Value: ${bool}, Type: ${typeof bool}`);

const undefinedType = undefined; // undefined
console.log(`Value: ${undefinedType}, Type: ${typeof undefinedType}`);

const nullVar = null; // null
console.log(`Value: ${nullVar}, Type: ${typeof nullVar}`);

const obj = { firstName: "John", lastName: "Doe", age: 30 }; // Object
console.log(`Value: ${JSON.stringify(obj)}, Type: ${typeof obj}`);

const arr = [1, 2, 3]; // Array
console.log(`Value: ${arr}, Type: ${typeof arr}`);

// function
const func = function () {
  return "Function Data Type";
};

console.log(`Value: ${func}, Type: ${typeof func}`);

const sym = Symbol("unique"); // Symbol
console.log(`Value: ${sym.toString()}, Type: ${typeof sym}`);

let bigInt = BigInt(9007199254740991); // BigInt
console.log(`Value: ${bigInt}, Type: ${typeof bigInt}`);
