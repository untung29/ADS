function fibonacciIterative(n) {
  // Fibonacci
  let fibonacciNumber = [0, 1];

  if (n < 0) {
    return "not valid number";
  }

  for (let i = 2; i < n + 1; i++) {
    fibonacciNumber.push(fibonacciNumber[i - 1] + fibonacciNumber[i - 2]);
  }

  //   for (){}

  return fibonacciNumber[n];
}

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciIterative(0));
