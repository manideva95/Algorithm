// https://leetcode.com/problems/intersection-of-two-arrays-ii/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let map = new Map();
    nums1.forEach(num => map.set(num, (map.get(num) || 0) + 1))
    let result = [];
    for (let num of nums2) {
        let val = map.get(num)
        if (val) {
            result.push(num);
            map.set(num, --val);
        }
    }
    return result
};