function returningBackWalk(walk) {
  // Check if the walk is exactly 10 minutes long
  if (walk.length !== 10) return false;

  // Initialize counters for each direction
  let northSouth = 0; // North is positive, South is negative
  let eastWest = 0; // East is positive, West is negative

  // Count the steps in each direction
  for (let direction of walk) {
    if (direction === "n") northSouth++;
    else if (direction === "s") northSouth--;
    else if (direction === "e") eastWest++;
    else if (direction === "w") eastWest--;
  }

  // Check if we returned to the starting point
  return northSouth === 0 && eastWest === 0;
}

// Testing the function
console.log(returningBackWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // true
console.log(returningBackWalk(["n", "n", "n", "s", "s", "s", "e", "e", "e", "w"])); // false
