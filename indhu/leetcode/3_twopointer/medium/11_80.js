// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let count = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] && count) {
            nums.splice(i, 1);
            i--;
        } else if (nums[i] === nums[i - 1]) count++;
        else count = 0;
    }
    return nums.length
};