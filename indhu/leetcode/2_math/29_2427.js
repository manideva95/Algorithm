// https://leetcode.com/problems/number-of-common-factors/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
    let count = 0;
    for (let i = 1; i <= (a < b ? a : b); i++) {
        if (a % i == 0 && b % i == 0) count++
    }
    return count
};

const result = commonFactors(2, 100)
console.log(result);

// Observation:
// output Time Complexity : O(n)