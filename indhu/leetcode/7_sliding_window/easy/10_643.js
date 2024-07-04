// https://leetcode.com/problems/maximum-average-subarray-i/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let result = -Infinity, j = 0, sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (i - j + 1 === k) {
            result = Math.max(result, sum / k)
            sum -= nums[j]
            j++
        }
    }
    return result
};

const result = findMaxAverage([1, 12, -5, -6, 50, 3], 4)
console.log(result);

// Observation:
// output Time Complexity : O(n)