// https://leetcode.com/problems/sort-array-by-parity/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    let result = [];
    let i = 0; let j = nums.length - 1;
    while (i <= j) {
        if (i < j) {
            nums[i] % 2 ? result.push(nums[i]) : result.unshift(nums[i])
        }
        nums[j] % 2 ? result.push(nums[j]) : result.unshift(nums[j])
        i++;
        j--;
    }
    return result
};
const result = sortArrayByParity([0]);
console.log(result);

// Observation:
// output Time Complexity : O(logn)