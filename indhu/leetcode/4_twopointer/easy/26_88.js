// https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // nums2 = nums2.splice(0, n)
    // nums1 = nums1.splice(0, m).concat(nums2)
    // nums1.sort((a, b) => a - b);

    //   const len = m + n
    //   nums1.splice(len-n)
    //   for (let i = 0; i < n; i++) {
    //     nums1.push(nums2[i])
    //   }

    //   for (let j = 1; j < len; j++) {
    //     if (nums1[j-1] || nums1[j-1] === 0) {
    //       if (nums1[j] < nums1[j-1]) {
    //         let tmp = nums1[j-1]
    //         nums1[j-1] = nums1[j]
    //         nums1[j] = tmp
    //         j = j-2
    //       }
    //     }
    //   }
    //   return nums1

    for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums2.shift();
    }

    return nums1.sort((a, b) => a - b);
};