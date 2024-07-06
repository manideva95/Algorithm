// https://leetcode.com/problems/hamming-distance/description/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    x = x.toString(2);
    y = y.toString(2);
    let count = 0;
    let maxLength = Math.max(x.length, y.length);
    maxLength > x.length ? x = x.padStart(maxLength, '0') : y = y.padStart(maxLength, '0')

    for (let i = 0; i < maxLength; i++) {
        if ((x[i]) !== (y[i])) count++
    }
    return count

};

const result = hammingDistance(342, 42345)
console.log(result);

// Observation:
// output Time Complexity : O(n)

