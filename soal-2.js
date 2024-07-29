function remainderOfTwoNum(num1, num2) {
  // Handle if typeof parameter is not a number
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Invalid type must be a number!");
  }

  // Handle division by zero by returning 0
  if (num1 === 0 || num2 === 0) {
    return 0;
  }

  // if num1 is greater than num2, return the remainder of num1 divided by num2
  if (num1 > num2) {
    return num1 % num2;
  }

  return num2 % num1;
}

// Testing the function
console.log(remainderOfTwoNum(17, 5)); // 2
console.log(remainderOfTwoNum(13, 72)); // 7
console.log(remainderOfTwoNum(0, -1)); // 0
console.log(remainderOfTwoNum(1, 0)); // handle with js so it return 0