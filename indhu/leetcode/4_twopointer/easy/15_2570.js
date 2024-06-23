// https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/

/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
    let map = new Map();
    nums2.forEach(nums => map.set(nums[0], nums[1]));
    nums1.forEach(nums => {
        let val = map.get(nums[0]);
        map.set(nums[0], val ? val + nums[1] : nums[1])
    })
    return [...map.entries()].sort((a, b) => a[0] - b[0])
};

const result = mergeArrays([[1, 2], [2, 3], [4, 5]], [[1, 4], [333, 2], [4, 1]])
console.log(result);

// Observation:
// output Time Complexity : O(n)