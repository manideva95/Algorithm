// https://leetcode.com/problems/find-common-elements-between-two-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
    let ans = [0, 0]
    let map1 = new Map(); let map2 = new Map();
    for (let num of nums1) map1.set(num, (map1.get(num) || 0) + 1);
    for (let num of nums2) {
        map2.set(num, (map2.get(num) || 0) + 1);
        if (map1.has(num)) ans[1] = ans[1] + 1;
    }
    map1.forEach((val, key) => map2.has(key) ? ans[0] = ans[0] + val : null);
    return ans;
};

const result = findIntersectionValues([2, 3, 2], [2, 1])
console.log(result);

// Observation:
// output Time Complexity : O(n)