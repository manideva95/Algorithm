// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let newArr = []
    for (let index = 0; index < nums.length; index++) {
        if (newArr.length == 0) {
            newArr.push(nums[index])
        } else {
            newArr.push(newArr[index - 1] + nums[index])
        }
    }
    return newArr
};

console.log(runningSum([1, 1, 1, 1, 1]))
console.log(runningSum([1, 2, 3, 4]))