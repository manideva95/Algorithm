// https://leetcode.com/problems/number-of-zero-filled-subarrays/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
    let count = 0, sequence = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            sequence++
        }
        count += sequence;
        if (nums[i] !== nums[i + 1]) {
            sequence = 0
        }
    }
    console.log(count)
    return count;
};