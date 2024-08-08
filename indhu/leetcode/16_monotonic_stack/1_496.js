// https://leetcode.com/problems/next-greater-element-i/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let map = new Map(), result = []

    nums2.forEach((e, i) => map.set(e, i));

    for (let num of nums1) {
        let i = map.get(num) + 1;
        while (i < nums2.length) {
            if (num < nums2[i]) {
                result.push(nums2[i]);
                break
            }
            i++
        }
        if (i === nums2.length) result.push(-1)
    }
    return result;
};