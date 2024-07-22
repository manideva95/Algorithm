// https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
    let sortedValue = [...nums].sort((a, b) => b - a).slice(0, k);
    let map = new Map();
    for (let i = 0; i < k; i++) {
        map.set(sortedValue[i], (map.get(sortedValue[i]) || 0) + 1)
    }
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let val = map.get(nums[i])
        if (val) {
            result.push(nums[i]);
            map.set(nums[i], --val)
        }
        if (result.length === k) break;
    }
    return result
};

const result = maxSubsequence([5, 6, 7, 4, 2, 3], 3)
console.log(result);

// Observation:
// output Time Complexity : O(n)