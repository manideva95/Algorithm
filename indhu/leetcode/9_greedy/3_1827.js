// https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    if (nums.length === 1) return 0
    let n = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] >= nums[i + 1]) {
            let increment = Math.abs(nums[i] - nums[i + 1]) + 1
            nums[i + 1] += increment
            n += increment
        }
    }
    return n
};

const result = minOperations([1, 1, 1])
console.log(result);

// Observation:
// output Time Complexity : O(n)