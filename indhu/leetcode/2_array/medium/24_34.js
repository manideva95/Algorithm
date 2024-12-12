// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let start = 0, end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            start = mid - 1; end = mid + 1
            while (nums[start] === target || nums[end] === target) {
                if (nums[start] === target) {
                    start--;
                }
                if (nums[end] === target) {
                    end++;
                }
                if (nums[start] !== target && nums[end] !== target) break
            }
            return [start + 1, end - 1];
        }
        if (nums[mid] < target) {
            start = mid + 1
        } else {
            end = mid - 1;
        }
    }
    return [-1, -1]
};