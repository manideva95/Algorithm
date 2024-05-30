// https://leetcode.com/problems/isomorphic-strings/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;
    let i = 0;
    let map1 = new Map(); let map2 = new Map();
    while (i < s.length) {
        const value1 = map1.get(s[i]);
        const value2 = map2.get(t[i])
        if ((value1 && value1 !== t[i]) || (value2 && value2 !== s[i])) return false;
        else {
            map1.set(s[i], t[i]);
            map2.set(t[i], s[i]);
        }
        i++;
    }
    return true
};

const result = isIsomorphic('paper', 'title')
console.log(result);

// Observation:
// output Time Complexity : O(n)