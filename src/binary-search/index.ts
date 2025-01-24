const bin = (arr: number[], searchValue: number) => {
  const length = arr.length;
  const index = Math.floor(length / 2);
  const centerElement = arr[index];
  if (centerElement === searchValue) return index;
  else if (centerElement > searchValue)
    return bin(arr.slice(0, centerElement), searchValue);
  else if (centerElement < searchValue)
    return bin(arr.slice(centerElement + 1), searchValue);
  else return -1;
};

const arr = [1, 2, 3, 4, 5];

console.log(
  "binary search work correct:",
  bin(arr, 6) === -1 && bin(arr, 2) === 1
);
