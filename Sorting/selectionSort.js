const selectionSort = function (arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let max = arr[0];
    let maxIdx;
    for (let j = 1; j < n - i - 1; j++) {
      if (arr[j] > max) {
        max = arr[j];
        maxIdx = j;
      }
    }
    let temp = arr[n - i - 1];
    arr[n - i - 1] = arr[maxIdx];
    arr[maxIdx] = temp;
  }

  console.log(arr);
};

selectionSort([4, 2, 1, 7, 8, 3]);
