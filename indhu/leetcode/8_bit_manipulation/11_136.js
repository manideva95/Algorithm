// https://leetcode.com/problems/single-number/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let result = 0;
    nums.forEach(num => result ^= num)
    return result
};

const result = singleNumber([1, 2, 2])
console.log(result);

// Observation:
// output Time Complexity : O(n)