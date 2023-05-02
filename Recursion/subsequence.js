const printS = (idx, ds, arr, n, ans) => {
  if (idx >= n) {
    ans.push([...ds]);
    return;
  }

  // For takeing
  ds.push(arr[idx]);
  printS(idx + 1, ds, arr, n, ans);

  // For Not Takeing
  ds.pop();
  printS(idx + 1, ds, arr, n, ans);
};

const arr = [3, 2, 1];
const ans = [];
printS(0, new Array(), arr, arr.length, ans);
console.log(ans);
