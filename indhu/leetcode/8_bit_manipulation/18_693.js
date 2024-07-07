// https://leetcode.com/problems/binary-number-with-alternating-bits/description/

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    // n = n.toString(2);
    // let prev;
    // for (let c of n) {
    //     if (prev && prev === c) return false;
    //     else prev = c
    // }
    // return true

    while (n > 0) {
        let c = n & 1;
        let d = n >> 1 & 1;
        if ((c ^ d) !== 1) {
            return false
        }
        n = n >> 1
    }
    return true
};

const result = hasAlternatingBits(5)
console.log(result);

// Observation:
// output Time Complexity : O(n)