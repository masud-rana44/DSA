const firstDuplicate = function (nums) {
  const uniqe = {};
  for (let i = 0; i < nums.length; i++) {
    if (uniqe[nums[i]] !== undefined) return nums[i];
    uniqe[nums[i]] = i;
  }

  return -1;
};

console.log(firstDuplicate([2, 4, 4, 2, 2]));
