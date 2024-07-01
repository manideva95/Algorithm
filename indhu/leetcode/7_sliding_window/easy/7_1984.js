// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
    if (k == 1) return 0
    nums.sort((a, b) => a - b);
    let min = nums[nums.length - 1];
    for (let i = 0; i <= nums.length - k; i++) {
        let subArr = nums.slice(i, i + k);
        min = Math.min(min, Math.abs(subArr[0] - subArr[k - 1]));
    }
    return min
};

const result = minimumDifference([9, 6], 2)
console.log(result);

// Observation:
// output Time Complexity : O(n)