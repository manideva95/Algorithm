var buildArray = function (nums) {
  let result = [];
  for (i = 0; i < nums.length; i++) {
    result.push(nums[nums[i]]);
  }
  return result;
};

let resultArray = buildArray([5, 0, 1, 2, 3, 4]);
console.log(resultArray);
