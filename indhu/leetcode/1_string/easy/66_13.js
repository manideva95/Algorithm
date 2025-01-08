// https://leetcode.com/problems/roman-to-integer/description/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);
    let sum = 0, prev = 0;
    for (let i = 0; i < s.length; i++) {
        let val = map.get(s[i]);
        if (prev && prev < val) sum += (val - prev) - prev
        else sum += val;
        prev = val
    }
    return sum
};