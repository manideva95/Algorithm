// https://leetcode.com/problems/check-if-the-number-is-fascinating/
/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
    let concat = `${n}${2 * n}${3 * n}`
    let set = new Set(concat.split(''));
    if (set.size < 9 || concat.length > 9 || set.has('0')) return false
    return true
};

const result = isFascinating(100)
console.log(result);

// Observation:
// output Time Complexity : O(n)