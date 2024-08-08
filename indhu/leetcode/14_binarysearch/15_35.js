// https://leetcode.com/problems/search-insert-position/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let start = 0, end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) return mid;
        else if ((nums[mid] < target && nums[mid + 1] > target)) return mid + 1

        if (nums[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    return nums[0] < target ? nums.length : 0
};