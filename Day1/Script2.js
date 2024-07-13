// Using let
let x = 5;
console.log("Initial value of x:", x);

x = 10;
console.log("Reassigned value of x:", x);

const y = 15;
console.log("Initial value of y:", y);

try {
  y = 20;
} catch (error) {
  console.log("Error when trying to reassign y:", error.message);
}
console.log("Value of y after trying reassignment:", y);

// Const with objects

const obj = { name: "Alice" };
console.log("Initial obj:", obj);

obj.name = "Bob";
console.log("After modifying property, obj:", obj);

try {
  obj = { name: "Charlie" };
} catch (error) {
  console.log("Error when trying to reassign obj:", error.message);
}
console.log("obj after attempted reassignment:", obj);
