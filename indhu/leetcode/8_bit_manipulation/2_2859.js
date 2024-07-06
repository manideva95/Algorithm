// https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/description/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
    let sum = 0;
    if (k === 0) return nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (i.toString(2).replaceAll('0', '').length === k) {
            sum += nums[i]
        }
    }
    return sum
};