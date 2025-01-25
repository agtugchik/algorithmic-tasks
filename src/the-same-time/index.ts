import deepEqual from "deep-equal";

const firstUser = [
  [8, 12],
  [17, 22],
];
const secondUser = [
  [5, 10],
  [14, 18],
  [20, 23],
];

const result = [
  [8, 10],
  [17, 18],
  [20, 22],
];

const theSameTime = (arr1: typeof firstUser, arr2: typeof arr1) => {
  const result: typeof arr1 = [];
  arr1.forEach((subArr1) => {
    let subResult: typeof subArr1 = [];
    arr2.forEach((subArr2) => {
      if (subArr1[0] >= subArr2[0] && subArr1[0] <= subArr2[1])
        subResult.push(subArr1[0]);
      if (subArr1[1] >= subArr2[0] && subArr1[1] <= subArr2[1])
        subResult.push(subArr1[1]);
      if (subArr2[0] >= subArr1[0] && subArr2[0] <= subArr1[1])
        subResult.push(subArr2[0]);
      if (subArr2[1] >= subArr1[0] && subArr2[1] <= subArr1[1])
        subResult.push(subArr2[1]);
      if (subResult.length === 2) {
        result.push(subResult.sort((a, b) => a - b));
        subResult = [];
      }
    });
  });
  return result;
};

console.log(
  "the same time work correc:",
  deepEqual(theSameTime(firstUser, secondUser), result)
);
