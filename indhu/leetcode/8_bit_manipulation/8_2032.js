// https://leetcode.com/problems/two-out-of-three/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
    let set2 = new Set(nums2), set3 = new Set(nums3);
    let result = new Set();

    for (let i = 0; i < nums1.length; i++) {
        if (set2.has(nums1[i]) || set3.has(nums1[i])) result.add(nums1[i]);
    }

    for (let i = 0; i < nums2.length; i++) {
        if (set3.has(nums2[i])) result.add(nums2[i]);
    }

    return [...result.values()]
};

const result = twoOutOfThree([1, 2, 2, 3], [1, 3], [3])
console.log(result);

// Observation:
// output Time Complexity : O(n)