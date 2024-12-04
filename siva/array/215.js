// https://www.geeksforgeeks.org/problems/largest-element-in-array4009/0
var findLargestNumber = function (nums, k) {
  let array = [...new Set(nums)];
  console.log(array);
  let max = array[0];
  //   o(n) approach
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) max = array[i];
  }
  console.log(max);

  //   sort approach
  let value = array.sort();
  console.log(value[array.length - 1]);
  console.log(array.sort());
};

findLargestNumber([3, 2, 3, 1, 2, 4, 5, 5, 6]);
