const selectionSort = function (arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }

  console.log(arr);
};

selectionSort([4, 2, 1, 5, 10, 15, 7, 8, 3]);
