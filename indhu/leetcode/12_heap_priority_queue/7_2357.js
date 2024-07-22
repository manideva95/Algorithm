// https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    // let set = new Set(nums);
    // nums = [...set].sort((a, b) => b - a);

    // let largest = nums[0], count = 0, prev = 0, i = nums.length - 1;

    // while (largest > 0) {
    //     if (nums[i] === 0) i--;
    //     else {
    //         largest -= (nums[i] - prev);
    //         prev = nums[i]; i--;
    //         count++
    //     }
    // }
    // return count
    return nums.reduce((acc, value) => {
        if (value !== 0) {
            acc.add(value)
        }
        return acc
    }, new Set()).size
};

const result = minimumOperations([1, 5, 0, 3, 5, 2])
console.log(result);

// Observation:
// output Time Complexity : O(n)