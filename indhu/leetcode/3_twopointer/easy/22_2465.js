// https://leetcode.com/problems/number-of-distinct-averages/

/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
    nums.sort((a, b) => a - b);
    let set = new Set();
    let i = 0, j = nums.length - 1;
    while (i < j) {
        console.log((nums[i] + nums[j]) / 2, nums[i], nums[j]);
        set.add((nums[i] + nums[j]) / 2);
        i++; j--;
    }
    return set.size;

    // Alernate
    nums.sort((a, b) => a - b);
    let res = new Set();
    while (nums.length > 0) {
        res.add((nums.pop() + nums.shift()) / 2)
    }
    return res.size;
};

const result = distinctAverages([4, 1, 4, 0, 3, 5, 8, 9])
console.log(result);

// Observation:
// output Time Complexity : O(n)