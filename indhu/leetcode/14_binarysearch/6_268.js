// https://leetcode.com/problems/missing-number/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    nums.sort((a, b) => a - b);
    if (nums[0] !== 0) return 0
    for (let n = 1; n < nums.length; n++) {
        if (nums[n] !== (nums[n - 1] + 1)) return nums[n - 1] + 1
    }
    return nums[nums.length - 1] + 1
};