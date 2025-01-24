const factorial = (n: number) => {
  if (n === 1) return n;
  return n * factorial(n - 1);
};

console.log(
  "factorial work correct:",
  factorial(2) === 2 && factorial(5) === 120 && factorial(10) === 3628800
);
