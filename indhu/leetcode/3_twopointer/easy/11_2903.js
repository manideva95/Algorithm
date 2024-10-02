https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/

/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function (nums, indexDifference, valueDifference) {
    if (indexDifference > nums.length) return [-1, -1];
    for (let i = 0; i < nums.length; i++) {
        let j = indexDifference + i;
        while (j < nums.length) {
            if (Math.abs(i - j) >= indexDifference && Math.abs(nums[i] - nums[j]) >= valueDifference) {
                return [i, j]
            }
            j++;
        }
    }
    return [-1, -1]
};

const result = findIndices([2, 1, 3], 1, 1)
console.log(result);

// Observation:
// output Time Complexity : O(n)