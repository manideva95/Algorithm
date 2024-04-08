let removeDuplicates = function (nums) {
  let left = 1;
  let right = 1;

  while (right < nums.length) {
    if (nums[right] !== nums[right - 1]) {
      nums[left] = nums[right];
      left++;
      right++;
    } else {
      left++;
    }
    return left;
  }
};

console.log(removeDuplicates([1, 1, 2]));
