// https://leetcode.com/problems/find-the-array-concatenation-value/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
    let concatenation = 0;
    let i = 0; let j = nums.length - 1;
    while (i <= j) {
        if (i == j) {
            concatenation = concatenation + nums[i]
            break
        }
        concatenation = concatenation + parseInt(nums[i].toString().concat(nums[j].toString()));
        i++;
        j--;
    }
    return concatenation
};

const result = findTheArrayConcVal([0, 1, 0, 1, 0, 2])
console.log(result);

// Observation:
// output Time Complexity : O(logn)