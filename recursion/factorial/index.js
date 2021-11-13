// Algorithm
// Base Case: number === 0;
// Recursive Case: number * (number - 1)
function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }

  return number * findFactorialRecursive(number - 1);
}

// Algorithm
// 1. Get the number
// 2. Looping the number until it is equal to One
// 3. Inside of the loop, keep multiply the number with its substraction and we need to keep track of this number
function findFactorialIterative(number) {
  let answer = 1;
  while (number !== 0) {
    answer *= number;
    number--;
  }
  return answer;
}

console.log(findFactorialRecursive(5));
