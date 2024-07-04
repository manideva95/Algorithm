// https://leetcode.com/problems/contains-duplicate-ii/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    while (k > 0) {
        for (let i = 0; i < nums.length - k; i++) {
            let subString = nums.slice(i, i + k + 1);
            if (subString[0] === subString[subString.length - 1]) return true
        }
        k--;
    }

    return false

    const hasmap = new Map();
    for (let idx = 0; idx < nums.length; idx++) {
        if (idx - hasmap.get(nums[idx]) <= k) {
            return true;
        }
        hasmap.set(nums[idx], idx);
    }
    return false;
};

const result = containsNearbyDuplicate([1, 3, 4], 1)
console.log(result);

// Observation:
// output Time Complexity : O(n)