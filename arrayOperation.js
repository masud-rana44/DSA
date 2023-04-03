const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = ["g", "h", "i"];

// Concat
const array4 = array1.concat(array2, array3); // Time: O(n) Space: O(n)

// Every
const isBelowThreshold = (currentValue) => currentValue < 40;

const array5 = [1, 30, 39, 29, 10, 13];

console.log(array5.every(isBelowThreshold)); // O(n), O(1)

// Filter
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6); // O(n), O(n)

// console.log(result);

// Find
const array6 = [5, 12, 8, 130, 44];

const found = array6.find((element) => element > 10); // O(n), O(1)

console.log(found);
