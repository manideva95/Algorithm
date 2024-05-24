// https://leetcode.com/problems/optimal-partition-of-string/

/**
 * @param {string} s
 * @return {number}
 */

// topic: hash, string, greedy
var partitionString = function (s) {
    const obj = new Map();
    let substring = ''
    for (let i = 0; i < s.length; i++) {
        if (substring.length + 1 !== new Set(`${substring + s[i]}`.split('')).size) {
            obj.set(i, substring)
            substring = s[i]
        } else substring = substring + s[i]
    }
    if (substring) obj.set(substring, substring);
    console.log(obj);
    return obj.size
};

const result = partitionString('abbacabac')
console.log(result);

// Observation:
// output Time Complexity : O(n log n)

