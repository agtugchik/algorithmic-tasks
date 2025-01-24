import deepEqual from "deep-equal";

const bubbleSort = (arr: number[]) => {
  let anotherSort = true;
  const result = [...arr];
  const sort = () => {
    for (let i = 1; i < result.length; i++) {
      const currIndex = i;
      const prevIndex = i - 1;
      const currValue = result[currIndex];
      const prevValue = result[prevIndex];
      if (prevValue > currValue) {
        result[prevIndex] = currValue;
        result[currIndex] = prevValue;
        anotherSort = true;
      }
    }
  };

  while (anotherSort) {
    anotherSort = false;
    sort();
  }

  return result;
};

const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

console.log(
  "bubble sort work correct:",
  deepEqual(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), [...arr].reverse())
);
