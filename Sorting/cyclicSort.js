const cyclicSort = (arr) => {
  let i = 0;
  let count = 0;
  while (true) {
    if (i === arr.length) break;
    if (arr[i] !== i + 1) {
      const temp = arr[arr[i] - 1];
      arr[arr[i] - 1] = arr[i];
      arr[i] = temp;
    } else i++;
    ++count;
  }

  console.log(arr, count);
};

cyclicSort([5, 4, 3, 2, 1]);
