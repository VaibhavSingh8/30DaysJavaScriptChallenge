// LOOPS

// Task 1 : For Loop: Print numbers from 1 to 10

const printNums = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(i + " ");
  }
};

//printNums();

// Task 2: Multiplication table of 5

const printTable = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(5 * i);
  }
};

//printTable();

// Task 3: While loop: sum of number from 1 to 10
function printSum() {
  let sum = 0;
  let i = 0;
  while (i <= 10) {
    sum = sum + i;
    i++;
  }
  return sum;
}

//console.log(printSum());

// Task 4: print numbers 10 to 1 using while loop
function printNums10_to_1() {
  let i = 10;
  while (i > 0) {
    console.log(i);
    i--;
  }
}

//printNums10_to_1();

// Task 5: do while loop: print 1 to 5

function print_1_to_5() {
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i > 0 && i <= 5);
}

//print_1_to_5();

// Task 6: Factorial using do while loop
function factorial(n) {
  let fact = 1;
  do {
    fact = fact * n;
    n--;
  } while (n > 0);
  return fact;
}

//console.log(factorial(5));

// Task 7: print pattern using nested for loops
/*

        *
        **
        ***
        ****
        *****

 */

function printPattern(n) {
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
//printPattern(5);

// Task 8: print 1 to 10, skip 5 using continue
function eight() {
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue;
    }
    console.log(i);
  }
}
eight();

// Task 9: print 1 to 10, stop when the number is 7 using break
function nine() {
  for (let i = 1; i <= 10; i++) {
    if (i === 7) {
      break;
    }
    console.log(i);
  }
}
nine();
