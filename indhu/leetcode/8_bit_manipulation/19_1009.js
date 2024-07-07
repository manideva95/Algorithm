// https://leetcode.com/problems/complement-of-base-10-integer/description/

/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
    let mask = 1;
    while (mask < n) mask = (mask << 1) + 1;
    return n ^ mask;
};

const result = bitwiseComplement(5)
console.log(result);

// Observation:
// output Time Complexity : O(n)