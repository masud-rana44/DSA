const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
let count = 0;

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle, array.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const mergedArray = [];
  let i = 0,
    j = 0;
  const m = left.length;
  const n = right.length;

  while (i < m && j < n) {
    count++;
    if (left[i] < right[j]) {
      mergedArray.push(left[i]);
      i++;
    } else {
      mergedArray.push(right[j]);
      j++;
    }
  }

  while (i < m) {
    count++;
    mergedArray.push(left[i]);
    i++;
  }

  while (j < n) {
    count++;
    mergedArray.push(right[j]);
    j++;
  }

  return mergedArray;
}

const answer = mergeSort(numbers);
console.log(answer, count);
