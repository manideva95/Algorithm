// https://leetcode.com/problems/a-number-after-a-double-reversal/
/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
    // if (num == 0) return true;
    // if (num.toString().slice(-1) == 0) return false;
    // return true;

    // Alternate
    if (num == 0) return true;
    if (num % 10 == 0) return false;
    return true;
};

const result = isSameAfterReversals(1)
console.log(result);

// Observation:
// output Time Complexity : O(n)