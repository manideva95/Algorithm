// https://leetcode.com/problems/minimum-number-game/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
    nums.sort((a, b) => a - b);
    let arr = Array(nums.length).fill(0), i = 1, j = 0;

    while (j < nums.length) {
        arr[j] = nums[i]
        arr[i] = nums[j]
        i += 2;
        j += 2
    }
    return arr
};