const fib = (n: number) => {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

console.log("fibonacci work correct:", fib(3) === 2 && fib(7) === 13);
