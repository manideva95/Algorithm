let removeDuplicates = function (nums) {
  let sorted = [...new Set(nums)];
  return sorted;
};

console.log(removeDuplicates([1, 1, 2]));

//for each approach

let removeDuplicatesforEach = function (nums) {
  let result = [];
  nums.forEach((val) => {
    if (!result.includes(val)) {
      result.push(val);
      console.log(val);
    }
  });
  return result;
};

console.log(removeDuplicatesforEach([1, 1, 2]));

// for loop approach

let removeDuplicatesforLoop = function (nums) {
  let index = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[index] = nums[i + 1];
      index++;
    }
  }
  console.log(index);
};

console.log(removeDuplicatesforLoop([1, 1, 2]));
