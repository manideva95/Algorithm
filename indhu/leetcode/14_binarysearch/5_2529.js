// https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    if (nums[0] > 0 || nums[nums.length - 1] < 0) return nums.length;


    for (let i = 0; i < nums.length;) {
        if (nums[i] == 0) nums.splice(i, 1)
        else i++
        if (nums[i] > 0) break
    }
    let i = 0; j = nums.length - 1;

    while (i <= j) {
        if (!(nums[i] < 0)) {
            return nums.length - i
        }
        if (!(nums[j] > 0)) {
            return j + 1
        }
        i++; j--
    }
    return nums.length / 2
};