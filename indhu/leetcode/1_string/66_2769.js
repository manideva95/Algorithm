// https://leetcode.com/problems/find-the-maximum-achievable-number/
/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
var theMaximumAchievableX = function (num, t) {
    return num + (2 * t)
};

const result = theMaximumAchievableX(4, 1)
console.log(result);

// Observation:
// output Time Complexity : O(1)