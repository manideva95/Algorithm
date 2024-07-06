// https://leetcode.com/problems/divide-array-into-equal-pairs/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    let map = new Map()
    nums.forEach(num => map.set(num, (map.get(num) || 0) + 1));
    for (let [k, v] of map) {
        if (v % 2 !== 0) return false
    }
    return true
};

const result = divideArray([3, 2, 3, 2, 2, 2])
console.log(result);

// Observation:
// output Time Complexity : O(n)