// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/

/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
    let map = new Map(), count = 0;
    for (let i = 0; i < 3; i++) {
        map.set(s[i], map.get(s[i]) + 1 || 1);
    }
    if (map.size === 3) count++;
    for (let i = 3; i < s.length; i++) {
        map.set(s[i], map.get(s[i]) + 1 || 1);
        if (map.has(s[i - 3])) map.set(s[i - 3], map.get(s[i - 3]) - 1);
        if (map.get(s[i - 3]) === 0) map.delete(s[i - 3]);
        if (map.size === 3) count++;
    }
    return count
};

const result = countGoodSubstrings('aababcabc')
console.log(result);

// Observation:
// output Time Complexity : O(n)