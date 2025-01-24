import deepEqual from "deep-equal";

const quickSort = (arr: number[]) => {
  const result = [...arr];
  const lastIndex = result.length - 1;

  let wall = 0;
  while (wall < result.length - 1) {
    const pivot = result[lastIndex];
    for (let i = wall; i < result.length; i++) {
      const currentElement = result[i];
      if (currentElement < pivot) {
        const wallElement = result[wall];
        result[wall] = currentElement;
        result[i] = wallElement;
        wall++;
      }
    }
    const wallElement = result[wall];
    result[wall] = pivot;
    result[lastIndex] = wallElement;
  }
  return result;
};

const array = [6, 5, 1, 3, 8, 4, 7, 9, 2];

console.log(
  "quick sort work correct:",
  deepEqual(
    quickSort(array),
    [...array].sort((a, b) => a - b)
  )
);
