let twoSum = function (nums, target) {
  let sortedNumbers = [...nums].sort((a, b) => a - b);
  let left = 0;
  let right = sortedNumbers.length - 1;
  while (left < right) {
    let sum = sortedNumbers[left] + sortedNumbers[right];
    if (sum === target) {
      let index = nums.indexOf(sortedNumbers[left]);
      let lastIndex = nums.lastIndexOf(sortedNumbers[right]);
      return [index, lastIndex];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
