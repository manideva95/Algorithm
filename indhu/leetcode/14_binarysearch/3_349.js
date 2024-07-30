// https://leetcode.com/problems/intersection-of-two-arrays/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const binarySearch = (arr, val, start, end) => {
    if (start > end) return false;

    let mid = Math.floor((start + end) / 2)

    if (arr[mid] == val) return true;

    if (arr[mid] > val) {
        return binarySearch(arr, val, start, mid - 1);
    } else {
        return binarySearch(arr, val, mid + 1, end)
    }
}

var intersection = function (nums1, nums2) {
    if (!nums1.length || !nums2.length) return [];

    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i - 1] !== nums1[i]) {
            if (binarySearch(nums2, nums1[i], 0, nums2.length)) result.push(nums1[i])
        }
    }

    return result
};