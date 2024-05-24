// https://leetcode.com/problems/remove-all-occurrences-of-a-substring/

/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
    for (let i = s.length; i >= 0; i--) {
        console.log(i);
        if (s == part) return ''
        s = s.replace(part, '')
    }
    return s
};

const result = removeOccurrences("xxxxyyyyb",
    "xy")
console.log(result);

// Observation:
// output Time Complexity : O(n log n)