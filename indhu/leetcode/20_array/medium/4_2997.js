// https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/description/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    for (let num of nums) {
        k = k ^ num
    }
    return k.toString(2).replaceAll('0', '').length
};