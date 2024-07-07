// https://leetcode.com/problems/reverse-bits/description/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    var result = 0;
    var count = 32;

    while (count--) {
        result *= 2;
        result += n & 1;
        n = n >> 1;
    }
    return result;
};

const result = reverseBits(1010010100000100000)
console.log(result);

// Observation:
// output Time Complexity : O(n)