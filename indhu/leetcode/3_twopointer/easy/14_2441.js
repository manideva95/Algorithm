// https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
    // nums.sort();
    // if (nums[0] > 0 || nums.length === 1) return -1;
    // let map = new Map();
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] > 0) break
    //     let j = i + 1;
    //     let k = nums.length - 1;
    //     while (j <= k) {
    //         if (j < k) {
    //             if (nums[j] === Math.abs(nums[i]) && (nums[i] + nums[j]) === 0)
    //                 map.set(nums[j], nums[j])
    //         }
    //         if (nums[k] === Math.abs(nums[i]) && (nums[i] + nums[k]) === 0)
    //             map.set(nums[k], nums[k])
    //         j++;
    //         k--;
    //     }
    // }
    // if (map.size) {
    //     let max = 0
    //     for (let [item] of map) {
    //         max = Math.max(item, max)
    //     }
    //     return max
    // } else return -1

    // Alternate

    const set = new Set(nums);
    let res = -1;

    for (const num of nums) {
        if (set.has(num * -1)) {
            res = Math.max(res, Math.abs(num));
        }
    }

    return res;
};

const result = findMaxK([-1, 2, -3, 3, 1])
console.log(result);

// Observation:
// output Time Complexity : O(nlogn)