//Can you write a function in JavaScript to calculate the cumulative sum of an array?

const cumulativeSum = arr => arr.reduce((acc, num) => [...acc, acc.length ? acc[acc.length - 1] + num : num], []);

const inputArray = [10, 15, 20, 25, 30];
const result = cumulativeSum(inputArray);

console.log(result); // Output: [10, 25, 45, 70, 100]
