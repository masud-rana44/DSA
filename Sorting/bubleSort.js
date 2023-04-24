const bubleSort = function (arr) {
  const n = arr.length;
  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    let isSwap = false;
    for (let j = 1; j < n - i; j++) {
      count++;
      if (arr[j] < arr[j - 1]) {
        isSwap = true;
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
    if (!isSwap) break;
  }
  console.log(arr);
  console.log(count);
};

bubleSort([7, 6, 5, 4, 3, 2, 1]);
