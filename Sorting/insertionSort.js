const insertionSort = function (arr) {
  const n = arr.length;
  let count = 0;
  for (let i = 1; i < n; i++) {
    let idx = i;
    for (let j = i - 1; j >= 0; j--) {
      ++count;
      if (arr[j] > arr[idx]) {
        // swap
        const temp = arr[j];
        arr[j] = arr[idx];
        arr[idx] = temp;
        --idx;
      } else break;
    }
  }

  console.log(arr, count);
};

insertionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);
