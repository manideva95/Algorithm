// https://leetcode.com/problems/unique-number-of-occurrences/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let map = new Map();
    arr.forEach(el => map.set(el, (map.get(el) || 0) + 1));
    return map.size === new Set(map.values()).size
};

const result = uniqueOccurrences(4009)
console.log(result);

// Observation:
// output Time Complexity : O(n)