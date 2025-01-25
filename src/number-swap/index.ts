const pairs = [
  [991234, 994231],
  [1234, 4231],
  [9973, 9973],
  [9939, 9993],
  [6123, 6321], //[6123, 6312]
];

const numberSwap = (num: number) => {
  const numAsArr = num.toString().split("").map(Number);
  let stopIndex = 0;
  let checkNext = true;
  while (checkNext) {
    if (stopIndex === 0 && numAsArr.length > 1) stopIndex++;
    else if (numAsArr[stopIndex] <= numAsArr[stopIndex - 1]) stopIndex++;
    else if (stopIndex === numAsArr.length) return num;
    else checkNext = false;
  }
  const subArr = numAsArr.splice(stopIndex - 1);
  const arrForChange = [...subArr];
  subArr.sort((a, b) => b - a);
  const highest = subArr[0];
  const lowest = subArr.reverse()[0];
  const highestIndex = arrForChange.indexOf(highest);
  const lowestIndex = arrForChange.indexOf(lowest);
  arrForChange[highestIndex] = lowest;
  arrForChange[lowestIndex] = highest;
  return Number(numAsArr.concat(arrForChange).join(""));
};

console.log(
  "number swap work correct:",
  pairs.every((pair) => numberSwap(pair[0]) === pair[1])
);
