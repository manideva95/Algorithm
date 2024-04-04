//https://leetcode.com/problems/search-insert-position/
//35. Search Insert Position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (element >= target) {
            return index
        }
    }
    return nums.length
};


console.log(searchInsert([1, 2, 4, 5], 3))