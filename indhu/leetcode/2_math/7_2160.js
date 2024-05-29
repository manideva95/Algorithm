// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
    num = num.toString().split('').sort();
    return parseInt(num[0] + num[2]) + parseInt(num[1] + num[3])
};

const result = minimumSum(4009)
console.log(result);

// Observation:
// output Time Complexity : O(n)