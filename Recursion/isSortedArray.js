const isSorted = (arr, idx) => {
  if (idx === arr.length - 1) return true;
  return arr[idx] <= arr[idx + 1] && isSorted(arr, ++idx);
};
console.log(isSorted([2, 4, 5, 7, 9, 14], 0));
