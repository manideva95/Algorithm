// https://leetcode.com/problems/single-element-in-a-sorted-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let n = nums.length - 1
    if (nums[0] !== nums[1]) return nums[0];
    if (nums[n] !== nums[n - 1]) return nums[n];
    let start = 1, end = n - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) return nums[mid];
        if ((nums[mid] === nums[mid - 1] && !(mid % 2)) || (nums[mid] !== nums[mid - 1] && mid % 2)) {
            end = mid - 1
        } else start = mid + 1
    }
    return -1
};