// https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) count++;
        if (count === 2) return true
    }
    return false;
};

const result = hasTrailingZeros([1, 2, 3, 4])
console.log(result);

// Observation:
// output Time Complexity : O(n)