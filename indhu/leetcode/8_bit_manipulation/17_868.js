// https://leetcode.com/problems/binary-gap/description/

/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
    let max = 0, count = 0;
    n = n.toString(2);
    for (let c of n) {
        console.log(c, count);
        if (c === '1' && count) {
            max = Math.max(max, count);
            count = 1
        } else if (c === '1' || (count && c === '0')) {
            count++
        }
    }
    return max
};

const result = binaryGap(5454)
console.log(result);

// Observation:
// output Time Complexity : O(n)