// https://leetcode.com/problems/smallest-even-multiple/

/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
    if (n % 2) return 2 * n;
    else return n
};

const result = smallestEvenMultiple(6)
console.log(result);

// Observation:
// output Time Complexity : O(1)