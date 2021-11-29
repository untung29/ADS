// Dynamic Programming
const fibonacci = () => {
  let cache = {};

  return function fib(n) {
    if (cache[n]) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      }
      cache[n] = fib(n - 1) + fib(n - 2);
      return cache[n];
    }
  };
};

const fasterFib = fibonacci();
console.log(fasterFib(10));
