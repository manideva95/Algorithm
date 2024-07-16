// https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
    nums.sort((a, b) => b - a);
    let max = Math.max(...nums);
    console.log(max);
    // let max = nums[0];
    for (let i = 1; i < k; i++) {
        console.log(max);
        max += nums[0] + i
    }
    return max
};

const result = maximizeSum([1, 2, 3, 4, 5], 3)
console.log(result);

// Observation:
// output Time Complexity : O(n)