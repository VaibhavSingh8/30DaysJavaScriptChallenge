// Task 1 - check number is positive, negative or 0

const num = 5;

function checkNum(num) {
  if (num > 0) {
    return "Positive number";
  }

  if (num < 0) {
    return "Negative number";
  }

  if (num === 0) {
    return "Zero";
  }
}

const result = checkNum(num);
console.log(result);

// Task 2 - check if person is eleigible to vote

const age = 19;

const checkAge = (age) => {
  if (age >= 18) {
    return "Eligible to vote";
  } else {
    return "Under age, Not eligible!";
  }
};

console.log(checkAge(age));

// Task 3 - find largest of 3 numbers

const a = 6;
const b = 3;
const c = 5;

const findLargest = (a, b, c) => {
  if (a > b) {
    if (a > c) {
      return "A is largest";
    }
    return "C is largest";
  } else if (b > a) {
    if (b > c) {
      return "B is largest";
    }
    return "C is largest";
  }
};

const checkLargest = findLargest(a, b, c);
console.log(checkLargest);

// Task 4 - switch case determine day based on input num

const determineWeekDay = (num) => {
  switch (num) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid";
  }
};

console.log(determineWeekDay(num));

// Task 5 - Assign a grade('A', 'B' , 'C', 'D', 'F') based on score
const assignGrade = (score) => {
  let grade;

  switch (true) {
    case score >= 90:
      grade = "A";
      break;
    case score >= 80:
      grade = "B";
      break;
    case score >= 70:
      grade = "C";
      break;
    case score >= 60:
      grade = "D";
      break;
    default:
      grade = "F";
      break;
  }

  return grade;
};

const score = 85;
console.log(assignGrade(score));

// Task 6: use ternary check even odd

const checkEvenOdd = (num) => {
  return num % 2 === 0 ? "Even" : "Odd";
};
console.log(checkEvenOdd(num));

// Task 7: check leap year

const checkLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "Leap year";
  } else {
    return "Not a leap year";
  }
};
const year = 2024;
console.log(checkLeapYear(year));
