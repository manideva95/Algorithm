// https://leetcode.com/problems/power-of-four/description/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    // if (n <= 0) return false
    // if (n === 1 || n === 4) return true
    // while (n > 0) {
    //     n = n / 4
    //     if (n === 4) return true
    //     else if (n % 4 !== 0) return false
    // }
    // return false

    if (n === 1) return true;
    if (n <= 0 || n % 4 !== 0) { return false }

    return isPowerOfFour(n / 4)
};

const result = isPowerOfFour(-17)
console.log(result);

// Observation:
// output Time Complexity : O(n)