// https://leetcode.com/problems/second-largest-digit-in-a-string/
/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
    let result = new Set();
    for (let c of s) {
        if (c >= 0) result.add(parseInt(c));
    }
    if (result.size <= 1) return -1
    const sort = [...result.keys()].sort((a, b) => b - a);
    return sort[1]
};

const result = secondHighest('t')
console.log(result);

// Observation:
// output Time Complexity : O(n)