// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    let count = 0;
    for (let i = num; i > 0;) {
        if (i % 2) i--;
        else i = i / 2
        count++
    }
    return count
};

const result = numberOfSteps(5)
console.log(result);

// Observation:
// output Time Complexity : O(log n)