// https://leetcode.com/problems/binary-search/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const binarySearch = (arr, val, start, end) => {
    if (start > end) return;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === val) return mid;
    if (arr[mid] > val) return binarySearch(arr, val, start, mid - 1);
    else return binarySearch(arr, val, mid + 1, end)
}
var search = function (nums, target) {
    let val = binarySearch(nums, target, 0, nums.length - 1);
    return val !== undefined ? val : -1
};