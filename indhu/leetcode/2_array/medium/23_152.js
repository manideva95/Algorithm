// https://leetcode.com/problems/maximum-product-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let prod1 = 1; max = -Infinity
    let prod2 = 1;
    for (let i = 0; i < nums.length; i++) {
        if (prod1 === 0) prod1 = 1;
        if (prod2 === 0) prod2 = 1;
        prod1 *= nums[i];
        prod2 *= nums[nums.length - i - 1];
        max = Math.max(max, prod1, prod2)
    }
    return max
};