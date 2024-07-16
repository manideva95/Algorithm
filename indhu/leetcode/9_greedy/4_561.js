// https://leetcode.com/problems/array-partition/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    let max = 0;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i = i + 2) {
        max += Math.min(nums[i], nums[i + 1])
    }
    return max
};