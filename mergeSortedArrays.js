const mergeSortedArrays = function (arr1, arr2) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  let minLength = arr1.length <= arr2.length ? arr1.length : arr2.length;
  const mergeArr = [];

  for (let i = 0; i < minLength; i++) {
    mergeArr.push(arr1[i]);
    mergeArr.push(arr2[i]);
  }

  while (minLength < arr1.length) {
    mergeArr.push(arr1[minLength]);
    minLength++;
  }

  while (minLength < arr2.length) {
    mergeArr.push(arr2[minLength]);
    minLength++;
  }

  console.log(mergeArr);
};

const mergeSortedArrays2 = function (arr1, arr2) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  const mergedArray = [];

  let i = 1,
    j = 1;

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  return mergedArray;
};

// mergeSortedArrays([5, 3, 2, -7], [7, -2, 4, 9, 4, 3]);
console.log(mergeSortedArrays2([-7, 2, 5], [1, 4, 6, 10, 20]));
