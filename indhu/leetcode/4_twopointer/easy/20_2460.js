// https://leetcode.com/problems/apply-operations-to-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] !== 0 && result.push(nums[i] * 2)
            nums[i] = nums[i] * 2;
            nums[i + 1] = 0;
        } else if (nums[i] !== 0) result.push(nums[i])
    }
    // let i = 1; let j = nums.length - result.length;
    // while (i <= j) {
    //     if (i < j) result.push(0)
    //     result.push(0)
    //     i++; j--;
    // }
    return result.concat(Array(nums.length - result.length).fill(0))
};

const result = applyOperations([0, 2, 0, 1, 1, 0])
console.log(result);

// Observation:
// output Time Complexity : O(n)