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
