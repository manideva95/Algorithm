// https://leetcode.com/problems/sort-array-by-parity-ii/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
    let result = Array(nums.length).fill(0);
    let i = 0; let j = nums.length - 1;
    for (let num of nums) {
        if (num % 2) {
            result[j] = num
            j = j - 2;
        } else {
            result[i] = num
            i = i + 2;
        }
    }
    return result
};

const result = sortArrayByParityII([3, 2, 2, 1, 3, 4])
console.log(result);

// Observation:
// output Time Complexity : O(n)