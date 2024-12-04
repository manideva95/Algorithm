// https://leetcode.com/problems/check-distances-between-same-letters/

/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {
    let map = new Map();
    for (let c = 0; c < s.length; c++) {
        let val = map.get(s[c])
        if (val != undefined) {
            if (c - val !== distance[s.charCodeAt(c) - 97]) return false
        } else map.set(s[c], c + 1)
    }
    return true
};

const result = checkDistances('abaeecbzcz', [1, 4, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
console.log(result);

// Observation:
// output Time Complexity : O(n)