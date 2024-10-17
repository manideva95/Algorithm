// https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/

/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function (s) {
    let set = new Set();
    for (let i = 0; i < s.length; i++) {
        set.add(`${s[i]}${s[i + 1]}`)
    }
    for (let item of set.keys()) {
        if (set.has(item.split('').reverse().join(''))) {
            return true
        }
    }
    return false
};

const result = isSubstringPresent('leatcode')
console.log(result);

// Observation:
// output Time Complexity : O(n)