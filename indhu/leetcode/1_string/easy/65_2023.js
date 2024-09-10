// https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/
/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function (nums, target) {
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        let j = i + 1;
        while (j < nums.length) {
            if (nums[i] + nums[j] == target) count++
            if (nums[j] + nums[i] == target) count++
            j++
        }
    }
    return count
};

const result = numOfPairs(["1", "1", "1"], "11")
console.log(result);

// Observation:
// output Time Complexity : O(n log n)